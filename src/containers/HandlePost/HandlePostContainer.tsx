import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Category from "util/enums/Category";
import useStore from "lib/hooks/useStore";
import { PostType } from "util/types/PostType";
import { toast } from "react-toastify";
import Modal from "components/common/Modal";
import HandlePost from "components/common/HandlePost";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useRecoilValue } from "recoil";
import { emailAtom, isAdminAtom } from "stores/Auth/AuthAtom";

interface HandlePostContainerProps {
  idx?: number;
  isAnswer?: boolean;
  setIsAnswer?: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category;
  onClose: () => void;
  handleGetPosts: () => Promise<void>;
}

const HandlePostContainer = ({
  idx,
  isAnswer,
  setIsAnswer,
  category,
  onClose,
  handleGetPosts,
}: HandlePostContainerProps) => {
  const { store } = useStore();

  const history = useNavigate();

  const isAdmin = useRecoilValue<boolean>(isAdminAtom);
  const email = useRecoilValue<string>(emailAtom);
  const { createPost, createAnswer, getPost, deletePost, modifyPost } =
    store.BoardStore;

  const [isModify, setIsModify] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [post, setPost] = useState<PostType>({
    category: category,
    content: " ",
    createdAt: new Date(),
    idx: 0,
    isDeleted: false,
    parentIdx: 0,
    title: " ",
    updatedAt: new Date(),
    user: {
      idx: 0,
      isAdmin: false,
      name: " ",
      email: " ",
    },
  });

  // 게시글 생성
  const handleCreatePost = useCallback(async () => {
    if (!title && !content) {
      toast.warning("빈칸을 채워주세요.");
    } else {
      await createPost(category, title, content)
        .then((res) => {
          onClose();
          handleGetPosts();
          toast.success("저장되었습니다.");
        })
        .catch((err) => {
          if (err.response?.status === 400) {
            toast.warning("올바르지 않은 값이 있습니다.");
          } else if (err.response?.status === 410) {
            toast.warning("로그인이 만료되었습니다.");
            history("/login");
          } else if (err.response?.status === 401) {
            toast.warning("로그인이 필요합니다.");
            history("/login");
          } else {
            toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
          }
        });
    }
  }, [title, content]);

  // 답변 생성
  const handleCreateAnswer = useCallback(async () => {
    if (idx) {
      if (!content) {
        toast.warning("빈칸을 채워주세요.");
      } else {
        await createAnswer(content, idx)
          .then((res) => {
            onClose();
            handleGetPosts();
            toast.success("수정되었습니다.");
          })
          .catch((err) => {
            if (err.response?.status === 400) {
              toast.warning("올바르지 않은 값이 있습니다.");
            } else if (err.response?.status === 403) {
              toast.warning("권한이 없습니다.");
            } else if (err.response?.status === 410) {
              toast.warning("로그인이 만료되었습니다.");
              history("/login");
            } else if (err.response?.status === 401) {
              toast.warning("로그인이 필요합니다.");
              history("/login");
            } else {
              toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
            }
          });
      }
    }
  }, [content, isAnswer]);

  // 게시글 수정
  const handleModifyPost = useCallback(async () => {
    if (idx) {
      if (!title && !content) {
        toast.warning("빈칸을 채워주세요.");
      } else {
        await modifyPost(idx, title, content)
          .then((res) => {
            onClose();
            handleGetPosts();
            toast.success("수정되었습니다.");
          })
          .catch((err) => {
            if (err.response?.status === 400) {
              toast.warning("올바르지 않은 값이 있습니다.");
            } else if (err.response?.status === 403) {
              toast.warning("권한이 없습니다.");
            } else if (err.response?.status === 410) {
              toast.warning("로그인이 만료되었습니다.");
              history("/login");
            } else if (err.response?.status === 401) {
              toast.warning("로그인이 필요합니다.");
              history("/login");
            } else {
              toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
            }
          });
      }
    }
  }, [title, content, idx]);

  // 게시글 저장
  const handleSavePost = useCallback(() => {
    if (isAnswer) {
      handleCreateAnswer();
    } else if (isModify) {
      handleModifyPost();
    } else {
      handleCreatePost();
    }
  }, [
    handleCreatePost,
    handleModifyPost,
    handleCreateAnswer,
    isAnswer,
    isModify,
  ]);

  // 게시글 삭제
  const handleDeletePost = useCallback(async () => {
    if (idx) {
      Swal.fire({
        title: "삭제하시겠습니까?",
        text: "작성된 내용은 모두 삭제됩니다.",
        showCancelButton: true,
        icon: "warning",
        cancelButtonText: "취소",
        confirmButtonText: "확인",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deletePost(idx)
            .then((res) => {
              onClose();
              handleGetPosts();
              toast.success("삭제되었습니다.");
            })
            .catch((err) => {
              if (err.response?.status === 403) {
                toast.warning("권한이 없거나 답변이 있어서 실패하였습니다.");
              } else if (err.response?.status === 410) {
                toast.warning("로그인이 만료되었습니다.");
                history("/login");
              } else if (err.response?.status === 401) {
                toast.warning("로그인이 필요합니다.");
                history("/login");
              } else {
                toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
              }
            });
        }
      });
    }
  }, [idx]);

  // 게시글 정보 가져오기
  const getPostCallback = useCallback(async () => {
    if (idx) {
      await getPost(idx)
        .then((res) => {
          setPost(res.data.post);
          setTitle(res.data.post.title);
          setContent(res.data.post.content);
        })
        .catch((err) => {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        });
    }
  }, [getPost, idx]);

  useEffect(() => {
    getPostCallback();
  }, [getPostCallback]);

  useEffect(() => {
    return () =>
      setPost({
        category: category,
        content: " ",
        createdAt: new Date(),
        idx: 0,
        isDeleted: false,
        parentIdx: 0,
        title: " ",
        updatedAt: new Date(),
        user: {
          idx: 0,
          isAdmin: false,
          name: " ",
          email: " ",
        },
      });
  }, []);

  return (
    <Modal onClose={onClose} className={"handle-post-modal"}>
      <HandlePost
        idx={idx}
        post={post}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        email={email}
        category={category}
        isModify={isModify}
        setIsModify={setIsModify}
        selectedIdx={idx}
        handleSavePost={handleSavePost}
        isAdmin={isAdmin}
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
        handleDeletePost={handleDeletePost}
      />
    </Modal>
  );
};

export default observer(HandlePostContainer);
