// libs
import axios from "axios";

// utils
import { serverIP } from "../utils/constants";

const url = `http://${serverIP}:3333/api/`;

const Api = axios.create({
  baseURL: `${url}`,
});

export default Api;
