import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5550";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export class BlogAPI {
  // the token to interact with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async getPosts() {
    let res = await this.request(`api/posts`);
    return res;
  }

  static async getPost(id) {
    let res = await this.request(`api/posts/${id}`);
    return res;
  }

  static async addsPost(data) {
    let res = await this.request(`api/posts`, data, "post");
    return res;
  }

  static async deletesPost(id) {
    let res = await this.request(`api/posts/${id}`, id, "delete");
    return res;
  }

  static async editsPost(id, title, description, body) {

    let data = {
      title, description, body
    }
    console.log(`in api id is ${id}, title is ${title}, body is ${body} and desc is ${description}`)
    let res = await this.request(`api/posts/${id}`, data, "put");
    return res;
  }

  static async getComments(post_id) {
    let res = await this.request(`api/posts/${post_id}/comments`);
    return res;
  }

  static async addsComment(post_id, data) {
    let res = await this.request(`api/posts/${post_id}/comments`, data, "post");
    return res;
  }

  static async deletesComment(post_id, comment_id) {
    let res = await this.request(`api/posts/${post_id}/comments/${comment_id}`, comment_id, "delete");
    return res;
  }
}