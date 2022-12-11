import axios from "axios";
import { mockInstance } from "./mock";

const mockRequests: string = process.env.REACT_APP_MOCK_REQUESTS || "false";
const BASE_URL: string =
  process.env.REACT_APP_BASE_URL || "http://localhost:3001/";

export const client = axios.create({
  baseURL: BASE_URL,
});

if (mockRequests === "true") {
  mockInstance(client);
}
