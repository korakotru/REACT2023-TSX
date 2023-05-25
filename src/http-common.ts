import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7110/api", // up to your api service configuration
  headers: {
    "Content-type": "application/json",
  },
});
