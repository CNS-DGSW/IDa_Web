import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Qna from "components/Qna";
import useStore from "lib/hooks/useStore";
import { GetPostsResponse } from "util/types/Response";
import Category from "util/enums/Category";
import { PostType } from "util/types/PostType";
import { toast } from "react-toastify";

const QnaContainer = ({}) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedIdx, setSelectedIdx] = useState<number>();
  const [show, setShow] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const { store } = useStore();
  const { isAdmin } = store.AuthStore;
  const { getPosts } = store.BoardStore;

  // 게시글 목록 조회
  const handleGetPosts = useCallback(async () => {
    await getPosts(Category.QNA)
      .then((res: GetPostsResponse) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        toast.error("오류가 발생하였습니다.");
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
      <Qna
        isAdmin={isAdmin}
        posts={filteredPosts}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
        search={search}
        setSearch={setSearch}
        show={show}
        setShow={setShow}
        handleGetPosts={handleGetPosts}
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
      />
    </>
  );
};

export default observer(QnaContainer);
