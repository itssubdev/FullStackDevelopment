import axios from "axios";
import {store} from '../redux/store'
import { refreshAccessToken, logout } from "../redux/authSlice";
import { jwtDecode } from "jwt-decode";


export const newRequest = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

newRequest.interceptors.request.use(
  async (config) => {
    let token = store.getState().auth?.user?.access;
    const refresh = store.getState().auth?.user?.refresh;

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        // If expired → refresh before request
        if (decoded.exp < now && refresh) {
          try {
            const res = await newRequest.post("/token/refresh/", {
              refresh,
            });

            token = res.data.access;

            // Update Redux (persist will save automatically)
            store.dispatch(refreshAccessToken(token));
          } catch (err) {
            console.warn("Refresh token expired → logging out");
            store.dispatch(logout());
            throw err;
          }
        }

        // Attach token for non-GET requests
        if (token && config.method !== "get") {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.warn("Invalid token:", e);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);