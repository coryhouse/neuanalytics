import axios from "axios";

const baseUrl = process.env.REACT_APP_USER_API_BASE_URL;

export function getUsers() {
  return axios.get(baseUrl);
}

export function deleteUser(userId) {
  return axios.delete(baseUrl + userId);
}

export function addUser(user) {
  return axios.post(baseUrl, user);
}
