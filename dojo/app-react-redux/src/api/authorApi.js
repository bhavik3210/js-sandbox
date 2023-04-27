import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

// baseUrl is replaced by webpack config
export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
