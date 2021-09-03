import Head from "next/head";
import Header from "../../components/header";
import Response from "../../response";
import { useRouter } from "next/router";
import SearchResults from "../../components/searchResults";
export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Gooble Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
