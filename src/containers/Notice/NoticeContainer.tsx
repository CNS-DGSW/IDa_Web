import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react";
import Notice from "components/Notice";
import useStore from "lib/hooks/useStore";
import { GetPostsResponse } from "util/types/Response";
import Category from "util/enums/Category";
import { PostType } from "util/types/PostType";

const NoticeContainer = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedIdx, setSelectedIdx] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const { store } = useStore();

  const { isAdmin } = store.AuthStore;
  const { getPosts } = store.BoardStore;

  const handleGetPosts = useCallback(async () => {
    await getPosts(Category.QNA)
      .then((res: GetPostsResponse) => {
        setPosts(res.data.posts);
        setFilteredPosts(res.data.posts);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

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
