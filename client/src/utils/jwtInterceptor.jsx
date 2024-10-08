import axios from "axios";

function jwtInterceptor() {
  axios.interceptors.request.use((req) => {
    //get token
    const hasToken = Boolean(window.localStorage.getItem("token"));
    //check has token
    if (hasToken) {
      req.headers = {
        ...req.headers,
        authorization: `Bearer ${window.localStorage.getItem("token")}`,
      };
    }
    return req;
  });

  axios.interceptors.response.use(
    (req) => {
      return req;
    },
    (error) => {
      console.log(error);
      if (
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized" &&
        Boolean(window.localStorage.getItem("token"))
      ) {
        window.localStorage.removeItem("token");
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );
}

export default jwtInterceptor;
