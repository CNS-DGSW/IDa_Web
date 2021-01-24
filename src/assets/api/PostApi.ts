import Api from "lib/customAxios";
import Category from "util/enums/Category";

class PostApi {
  async CreatePost(category: Category, title: string, content: string) {
    try {
      const body = {
        category,
        title,
        content,
      };

      const { data } = await Api.post("/post/createPost", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetPost(idx: number) {
    try {
      const { data } = await Api.get(`/post/getPost/${idx}`);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetPosts(category: Category) {
    try {
      const { data } = await Api.get(`/post/getPosts?category=${category}`);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async CreateAnswer(content: string, postIdx: number) {
    try {
      const body = {
        content,
        postIdx,
      };

      const { data } = await Api.post("/post/createAnswer", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async DeletePost(idx: number) {
    try {
      const { data } = await Api.delete(`/post/deletePost/${idx}`);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ModifyPost(idx: number, content: string, title: string) {
    try {
      const body = {
        content,
        title,
      };

      const { data } = await Api.patch(`/post/modifyPost/${idx}`, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new PostApi();
