import axios from "axios";
export const FIREBASE_TOKEN = "AIzaSyAwDZOKswGH3qKG2yYHYAZHOL4DrW1wMGo";
const API_AUTH = `https://identitytoolkit.googleapis.com`;

const apiUri = axios.create({
  baseURL: API_AUTH,
});

// cada vez que se hace una request se dispera el interceptor
// apiUri.interceptors.request.use((config) => {
//   config.headers = {
//     authorization: token ? `Bearer ${token}` : null,
//   };
//   return config;
// });

export default apiUri;
