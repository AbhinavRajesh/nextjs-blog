const __prod__ = process.env.NODE_ENV === "production";

export const API_URL = __prod__ ? "" : "http://localhost:3000/api";
