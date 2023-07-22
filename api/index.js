import axios from "axios";

const posts = {
  all: () => axios.get('https://jsonplaceholder.typicode.com/comments'),
  findById: id => axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`),
};

export default {
  posts: posts,
}
