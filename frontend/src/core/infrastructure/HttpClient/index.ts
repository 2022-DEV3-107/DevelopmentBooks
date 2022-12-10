import axios from "axios";
import { mockInstance } from "./mock";

const mockRequests: boolean = false;
const BASE_URL: string = "http://localhost:3001/";

export const client = axios.create({
  baseURL: BASE_URL,
});

if (mockRequests) {
  mockInstance(client);
}
