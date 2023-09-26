import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react";
import Notice from "components/Notice";
import useStore from "lib/hooks/useStore";
import { GetPostsResponse } from "util/types/Response";
import Category from "util/enums/Category";
import { PostType } from "util/types/PostType";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { isAdminAtom } from "stores/Auth/AuthAtom";

const NoticeContainer = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedIdx, setSelectedIdx] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const { store } = useStore();

  const { getPosts } = store.BoardStore;
  const isAdmin = useRecoilValue<boolean>(isAdminAtom);

  // 게시글 목록 조회
  const handleGetPosts = useCallback(async () => {
    await getPosts(Category.NOTICE)
      .then((res: GetPostsResponse) => {
        setPosts(res.data.posts);
        setFilteredPosts(res.data.posts);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          toast.warning("게시하는데 실패하였습니다. 다시 시도해 주세요.");
        } else {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
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
      <Notice
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

export default observer(NoticeContainer);
