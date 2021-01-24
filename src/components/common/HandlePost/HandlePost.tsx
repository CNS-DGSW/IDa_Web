import React from "react";
import Category from "util/enums/Category";
import { PostType } from "util/types/PostType";
import "./HandlePost.scss";

interface HandlePostProps {
  post: PostType;
  isAnswer?: boolean;
  setIsAnswer?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  category: Category;
  isModify: boolean;
  setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIdx?: number;
  handleSavePost: () => void;
  isAdmin: boolean;
  handleDeletePost: () => void;
}

const HandlePost = ({
  post,
  title,
  setTitle,
  content,
  setContent,
  email,
  category,
  isModify,
  setIsModify,
  selectedIdx,
  handleSavePost,
  isAdmin,
  isAnswer,
  setIsAnswer,
  handleDeletePost,
}: HandlePostProps) => {
  return (
    <div className="handle-post">
      <div className="handle-post-header">{category}</div>
      <div className="handle-post-content">
        {!isAnswer && (
          <div className="handle-post-content-item">
            <span>제목</span>
            {selectedIdx && !isModify ? (
              <div className="handle-post-content-item-box">{post.title}</div>
            ) : (
              <>
                {post.parentIdx === 0 && (
                  <input
                    className="handle-post-content-item-box"
                    type="text"
                    value={title}
                    autoFocus
                    maxLength={55}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                )}
              </>
            )}
          </div>
        )}
        <div className="handle-post-content-item">
          <span>내용</span>
          {selectedIdx && !isModify && !isAnswer ? (
            <div className="handle-post-content-item-box handle-post-content-item-content">
              {post.content}
            </div>
          ) : (
            <textarea
              className="handle-post-content-item-box handle-post-content-item-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
        </div>
        <div className="handle-post-footer">
          {category == Category.QNA &&
            post.parentIdx === 0 &&
            isAdmin &&
            setIsAnswer &&
            !isModify &&
            !isAnswer && (
              <div
                className="handle-post-footer-btn"
                onClick={() => {
                  setTitle("");
                  setContent("");
                  setIsAnswer(true);
                }}
              >
                답변하기
              </div>
            )}
          {!selectedIdx || isModify || isAnswer ? (
            <>
              <div className="handle-post-footer-btn" onClick={() => handleSavePost()}>
                저장하기
              </div>
            </>
          ) : (
            <>
              {email === post.user.email ||
                (category === Category.NOTICE && isAdmin && (
                  <>
                    <div
                      className="handle-post-footer-btn"
                      onClick={() => setIsModify(true)}
                    >
                      수정
                    </div>
                    <div
                      className="handle-post-footer-btn"
                      onClick={() => handleDeletePost()}
                    >
                      삭제
                    </div>
                  </>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HandlePost;
