import axios from "axios"
const axiosInstant = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-39a6c/us-central1/api",
  baseURL: "https://api-2qu72ophkq-uc.a.run.app",
});


export { axiosInstant };