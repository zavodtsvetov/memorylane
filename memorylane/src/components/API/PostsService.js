import axios from "axios";
export default class PostsService {
  // В этом куске кода я обращаюсь к серверу и указываю query-параметры. Limit отвечает за макс кол-во постов на странице, а page за первоначальную страницу, откуда надо начать
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/` + id,
    );
    return response;
  }
  static async getCommentsByPost(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    return response;
  }
}
