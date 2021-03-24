import { action } from "mobx";
import { autobind } from "core-decorators";
import PostApi from "../../assets/api/PostApi";
import {
  Response,
  GetPostResponse,
  GetPostsResponse,
} from "../../util/types/Response";
import Category from "util/enums/Category";

@autobind
class BoardStore {
  @action
  createPost = async (
    category: Category,
    title: string,
    content: string
  ): Promise<Response> => {
    const response = await PostApi.CreatePost(category, title, content);

    return response;
  };

  @action
  createAnswer = async (
    content: string,
    postIdx: number
  ): Promise<Response> => {
    const response = await PostApi.CreateAnswer(content, postIdx);

    return response;
  };

  @action
  getPosts = async (category: Category): Promise<GetPostsResponse> => {
    const response: GetPostsResponse = await PostApi.GetPosts(category);

    return response;
  };

  @action
  getPost = async (idx: number): Promise<GetPostResponse> => {
    const response: GetPostResponse = await PostApi.GetPost(idx);

    return response;
  };

  @action
  deletePost = async (idx: number): Promise<Response> => {
    const response = await PostApi.DeletePost(idx);

    return response;
  };

  @action
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
