//* 存放请求封装的函数

const BASE_URL = "http://www.pudge.wang:4000";
const http = {
  get(url, params) {
    if (params) {
      const arr = Object.keys(params);
      const arr2 = arr.map((item) => {
        return item + "=" + params[item];
      });
      const str = arr2.join("&");
      url = url + "?" + str;
    }

    return fetch(BASE_URL + url).then((res) => res.json());
  },
  post(url, data) {
    return fetch(BASE_URL + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json());
  },
};

export default http;
