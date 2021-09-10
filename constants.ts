const __prod__ = process.env.NODE_ENV === "production";

export const API_URL = __prod__
  ? "https://nextjs-blog-eight-lake.vercel.app/api"
  : "http://localhost:3004/api";
