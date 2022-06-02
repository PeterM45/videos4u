// Axios is a package to simplify api fetching
import axios from "axios";

// API key
const KEY = "AIzaSyCycwze5qKVu1oNZzR8wpEjtqFOpHj343s";

// Exporting the api request
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
