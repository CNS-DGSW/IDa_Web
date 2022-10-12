import React, { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react";
import Faq from "components/Faq";
import useStore from "lib/hooks/useStore";
import { GetPostsResponse } from "util/types/Response";
import Category from "util/enums/Category";
import { PostType } from "util/types/PostType";
import { toast } from "react-toastify";

const FaqContainer = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedIdx, setSelectedIdx] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const { store } = useStore();

  const { getPosts } = store.BoardStore;
  const { isAdmin } = store.AuthStore;

  // 게시글 목록 조회
  const handleGetPosts = useCallback(async () => {
    await getPosts(Category.FAQ)
      .then((res: GetPostsResponse) => {
        setPosts(res.data.posts);
        setFilteredPosts(res.data.posts);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          toast.warning("잘못된 값입니다. 다시 시도해 주세요");
        } else {
          toast.error(
            "서버 오류입니다. 잠시 후 다시 시도해주세요. 잠시 후 다시 시도해주세요"
          );
        }
      });
  }, []);

  // 게시글 검색
  const searchPostFilter = useCallback(() => {
    setFilteredPosts(
      posts.filter((post) => {
        if (post.title.includes(search)) return true;
      })
    );
  }, [search, posts]);

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  useEffect(() => {
    searchPostFilter();
  }, [searchPostFilter]);

  useEffect(() => {
    return () => setFilteredPosts([]);
  }, []);

  return (
    <>
      <Faq
        isAdmin={isAdmin}
        posts={filteredPosts}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
        search={search}
        setSearch={setSearch}
        show={show}
        handleGetPosts={handleGetPosts}
        setShow={setShow}
      />
    </>
  );
};

export default observer(FaqContainer);
