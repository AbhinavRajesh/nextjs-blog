import { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data";

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse
) {
  const article = data.filter((article) => article.id.toString() === id);
  if (article.length > 0) return res.status(200).json(article[0]);
  return res.status(404).json({ message: `Article with id: ${id} not found!` });
}
