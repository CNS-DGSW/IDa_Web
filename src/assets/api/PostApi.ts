import Api from "lib/customAxios";
import Category from "util/enums/Category";

class PostApi {
  async CreatePost(category: Category, title: string, content: string) {
    const body = {
      category,
      title,
      content,
    };

    const { data } = await Api.post("/post/createPost", body);

    return data;
  }

  async GetPost(idx: number) {
    const { data } = await Api.get(`/post/getPost/${idx}`);

    return data;
  }

  async GetPosts(category: Category) {
    const { data } = await Api.get(`/post/getPosts?category=${category}`);

    return data;
  }

  async CreateAnswer(content: string, postIdx: number) {
    const body = {
      content,
      postIdx,
    };

    const { data } = await Api.post("/post/createAnswer", body);

    return data;
  }

  async DeletePost(idx: number) {
    const { data } = await Api.delete(`/post/deletePost/${idx}`);

    return data;
  }

  async ModifyPost(idx: number, content: string, title: string) {
    const body = {
      content,
      title,
    };

    const { data } = await Api.patch(`/post/modifyPost/${idx}`, body);

    return data;
  }
}

export default new PostApi();
