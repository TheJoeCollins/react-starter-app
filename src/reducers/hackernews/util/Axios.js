import axios from "axios";

const Axios = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
  timeout: 5000
});

Axios["get"]("/topstories.json?print=pretty")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

export const sendRequest = async (type, url, opts) => {
  let options = {};
  if (type === "get") {
    options = { params: { ...opts.params } };
  } else if (type === "post") {
    options = { body: { ...opts.body } };
  }

  console.log(options);

  const data = await Axios[type](url, options);
  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};
