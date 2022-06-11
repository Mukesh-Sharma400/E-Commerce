import axios from "./axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ecommerce-webapp-c76ae/us-central1/api", //The API URL (Cloud Function using NodeJs)
});

export default instance;
