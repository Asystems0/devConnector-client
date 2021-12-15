import axios from "axios";

export default axios.create({
  baseURL: "https://developor.herokuapp.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
