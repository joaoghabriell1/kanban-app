import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://react-ho-b122c-default-rtdb.firebaseio.com/",
  headers: { Accept: "application/json" },
});

export default ApiClient;
