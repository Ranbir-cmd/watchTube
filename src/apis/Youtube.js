import axios from "axios";
const KEY = "AIzaSyA7dj2bXZbionHSv5M-I3D1bAGfX3VmXcU";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
