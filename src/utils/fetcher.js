import axios from "axios";

const fetcher = ({
  method = "GET",
  request = "",
  payload = {},
  isToken = true,
  headerOptions = {},
}) => {
  const url = `${process.env.REACT_APP_HOST_API_KEY}${request}`;
  let token = localStorage.getItem("token");
  const authorization = isToken ? { Authorization: token } : {};
  const options = {
    method,
    url,
    data: payload,
    headers: {
      ...authorization,
      ...headerOptions,
    },
  };
  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        if (res.data.status === "SUCCESS" || res.data.status === "OK" || res.data.code === 200 || res.data.status===true) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((error) => {
        console.log("error", error);
        reject(error.response);
      });
  });
};

export default fetcher;
