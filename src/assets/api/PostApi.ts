import axios from "axios";
import { server } from "../../config/config.json";

class PostApi {
  async CreatePost(category: string, title: string, content: string) {
    try {
      const url = `${server}/post/createPost`;

      const body = {
        category,
        title,
        content,
      };

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.post(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetPost() {
    try {
      const url = `${server}/post/getPost`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async CreateAnswer(content: string, postIdx: number) {
    try {
      const url = `${server}/post/createAnswer`;

      const body = {
        content,
        postIdx,
      };

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.post(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async DeletePost(idx: number) {
    try {
      const url = `${server}/post/getPost/${idx}`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.delete(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ModifyPost(idx: number, content: string, title: string) {
    try {
      const url = `${server}/post/modifyPost/${idx}`;

      const body = {
        content,
        title,
      };

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.put(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new PostApi();
