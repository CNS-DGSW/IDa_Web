import { action } from "mobx";
import { autobind } from "core-decorators";
import PostApi from "../../assets/api/PostApi";
import { Response, GetPostResponse, GetPostsResponse } from "../../util/types/Response";
import Category from "util/enums/Category";

@autobind
class BoardStore {
  @action
  createPost = async (
    category: Category,
    title: string,
    content: string
  ): Promise<Response> => {
    try {
      const response = await PostApi.CreatePost(category, title, content);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  createAnswer = async (content: string, postIdx: number): Promise<Response> => {
    try {
      const response = await PostApi.CreateAnswer(content, postIdx);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getPosts = async (category: Category): Promise<GetPostsResponse> => {
    try {
      const response: GetPostsResponse = await PostApi.GetPosts(category);

      return new Promise((resolve: (requset: GetPostsResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getPost = async (idx: number): Promise<GetPostResponse> => {
    try {
      const response: GetPostResponse = await PostApi.GetPost(idx);

      return new Promise((resolve: (requset: GetPostResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  deletePost = async (idx: number): Promise<Response> => {
    try {
      const response = await PostApi.DeletePost(idx);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  modifyPost = async (idx: number, title: string, content: string): Promise<Response> => {
    try {
      const response = await PostApi.ModifyPost(idx, content, title);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default BoardStore;
