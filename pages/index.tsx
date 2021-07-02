import { InferGetStaticPropsType } from "next";
import { Articles } from "../types";

import Navbar from "../components/Navbar";
import Article from "../components/Article";

export default function Home({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-5 space-y-5">
        {articles.map((article) => (
          <Article
            body={article.body}
            id={article.id}
            title={article.title}
            userId={article.userId}
            key={article.id}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles: Articles[] = await (
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  ).json();

  return {
    props: {
      articles,
    },
  };
};
