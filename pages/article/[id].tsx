import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { API_URL } from "../../constants";
import { Articles } from "../../types";

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <div className="flex flex-col items-start justify-center mt-40">
        <h1 className="font-bold text-4xl capitalize mb-4">{article.title}</h1>
        <p className="text-xl">{article.body}</p>
        <Link href="/">
          <a className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded mt-4">
            Go Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${API_URL}/articles/${context.params!.id}`);
  const article: Articles = await res.json();

  return {
    props: {
      article: article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/articles`);
  const articles: Articles[] = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export default Article;
