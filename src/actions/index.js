import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=mania7539";

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return ({
        type: FETCH_POSTS,
        payload: request
    });
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());
    //
    // to go back automatically after create a new post, we add a callback to the below code:
    // ```const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);```
    // with ```.then()``` of promise

    return ({
        type: CREATE_POST,
        payload: request
    });
}

