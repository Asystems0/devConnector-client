import axios from "axios";

const myServer = `${process.env.BASEURL}/api`;
export default axios.create({
  baseURL: myServer || "http://localhost:3000/api",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
