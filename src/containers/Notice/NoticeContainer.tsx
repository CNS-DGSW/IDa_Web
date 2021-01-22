import React, { useEffect, useState, useCallback } from "react";
import { inject, observer } from "mobx-react";
import Notice from "components/Notice";
import useStore from "lib/hooks/useStore";
import { Response, GetPostResponse } from "util/types/Response";
import useQuery from "lib/hooks/useQuery";
import Swal from "sweetalert2";

const NoticeContainer = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(true); //임시

  const { store } = useStore();
  const query = useQuery();

  const {
    tryCreatePost,
    tryCreateAnswer,
    tryGetPost,
    tryDeletePost,
    tryModifyPost,
  } = store.BoardStore;

  const handleCreatePost = useCallback(async () => {
    if (!title && !content) {
      console.log("제목과 내용을 입력해 주세요");
    } else if (!title) {
      console.log("제목을 입력해 주세요");
    } else if (!content) {
      console.log("내용을 입력해 주세요");
    } else {
      await tryCreatePost("NOTICE", title, content)
        .then((res: Response) => {
          setModal(false);
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
  }, [title, content]);

  const handleCreateAnswer = useCallback(async () => {
    if (!content) {
      console.log("내용을 작성해 주세요");
    } else {
      await tryCreateAnswer(content, Number(query.get("postIdx")))
        .then((res: Response) => {
          setModal(false);
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
  }, [content]);

  const handleModifyPost = useCallback(async () => {
    if (!title && !content) {
      console.log("제목과 내용을 입력해 주세요");
    } else if (!title) {
      console.log("제목을 입력해 주세요");
    } else if (!content) {
      console.log("내용을 입력해 주세요");
    } else {
      await tryModifyPost(Number(query.get("idx")), title, content)
        .then((res: Response) => {
          setModal(false);
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
  }, [title, content]);

  const handleGetPost = useCallback(async () => {
    await tryGetPost()
      .then((res: GetPostResponse) => {
        console.log("1");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const handleDeletePost = useCallback(async () => {
    await tryDeletePost(Number(query.get("idx")))
      .then((res: Response) => {
        handleGetPost();
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const handleCloseModal = () => {
    if (title || content) {
      Swal.fire({
        title: "나가시겠습니까?",
        text: "작성된 내용은 모두 삭제됩니다.",
        showCancelButton: true,
        cancelButtonText: "취소",
        confirmButtonText: "확인",
      }).then((result) => {
        if (result.isConfirmed) {
          setModal(false);
        }
      });
    } else if (!title && !content) {
      setModal(false);
    }
  };

  useEffect(() => {
    if (!modal) {
      setTitle("");
      setContent("");
    }
  }, [modal]);
  return (
    <>
      <div>
        <Notice
          modal={modal}
          setModal={setModal}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          handleCreatePost={handleCreatePost}
          handleCloseModal={handleCloseModal}
          handleDeletePost={handleDeletePost}
          handleModifyPost={handleModifyPost}
          handleCreateAnswer={handleCreateAnswer}
          handleGetPost={handleGetPost}
          isAdmin={isAdmin}
        />
      </div>
    </>
  );
};

export default inject("store")(observer(NoticeContainer));
