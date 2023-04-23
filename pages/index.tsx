import Head from "next/head";
import ArticleList from "@/components/ArticleList";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Next Project App</title>
        <meta name="keywords" content="Next Project App" />
      </Head>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    /* Returning the output from the request as an object to be passed as props */
    props: {
      articles,
    },
  };
};
