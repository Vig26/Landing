import axios from "axios";

export default function setupInterceptors() {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response?.status === 401 || error.response?.status === 422) {
        localStorage.clear();
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );
}
