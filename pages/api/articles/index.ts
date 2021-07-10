import { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const articles = data;
  if (articles.length > 0) return res.status(200).json(articles);
  return res
    .status(500)
    .json({ message: `Error fetching the articles. Please try again later.` });
}
