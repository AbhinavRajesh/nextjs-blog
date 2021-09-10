import { GetServerSideProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Head from "next/head";

import { API_URL } from "../../constants";
import { Articles } from "../../types";

import Navbar from "../../components/Navbar";

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={`${article.body.slice(0, 140)}...`} />
      </Head>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_URL}/articles/${context.params!.id}`);
  const article: Articles = await res.json();

  return {
    props: {
      article: article,
    },
  };
};

export default Article;
