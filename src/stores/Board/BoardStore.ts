import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import PostApi from "../../assets/api/PostApi";
import { Response, GetPostResponse } from "../../util/types/Response";
import { stringify } from "querystring";
import { PostType } from "util/types/PostType";

@autobind
class BoardStore {
  @action
  tryCreatePost = async (
    category: string,
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
  tryCreateAnswer = async (content: string, postIdx: number): Promise<Response> => {
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
  tryGetPost = async (): Promise<GetPostResponse> => {
    try {
      const response = await PostApi.GetPost();

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
  tryDeletePost = async (idx: number): Promise<Response> => {
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
  tryModifyPost = async (
    idx: number,
    title: string,
    content: string
  ): Promise<Response> => {
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
