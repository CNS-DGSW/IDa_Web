import { autobind } from "core-decorators";
import { _autoAction } from "mobx";
import PostApi from "../../assets/api/PostApi";
import {
  Response,
  GetPostResponse,
  GetPostsResponse,
} from "../../util/types/Response";
import Category from "util/enums/Category";

@autobind
class BoardStore {
  // 게시글 생성
  @_autoAction
  createPost = async (
    category: Category,
    title: string,
    content: string
  ): Promise<Response> => {
    const response = await PostApi.CreatePost(category, title, content);

    return response;
  };

  // Q&A 답변 생성
  @_autoAction
  createAnswer = async (
    content: string,
    postIdx: number
  ): Promise<Response> => {
    const response = await PostApi.CreateAnswer(content, postIdx);

    return response;
  };

  // 게시글 목록 받아오기
  @_autoAction
  getPosts = async (category: Category): Promise<GetPostsResponse> => {
    const response: GetPostsResponse = await PostApi.GetPosts(category);

    return response;
  };

  // 게시글 상세 조회
  @_autoAction
  getPost = async (idx: number): Promise<GetPostResponse> => {
    const response: GetPostResponse = await PostApi.GetPost(idx);

    return response;
  };

  // 게시글 삭제
  @_autoAction
  deletePost = async (idx: number): Promise<Response> => {
    const response = await PostApi.DeletePost(idx);

    return response;
  };

  // 게시글 수정
  @_autoAction
  modifyPost = async (
    idx: number,
    title: string,
    content: string
  ): Promise<Response> => {
    const response = await PostApi.ModifyPost(idx, content, title);

    return response;
  };
}

export default BoardStore;
