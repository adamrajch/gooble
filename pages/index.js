import Head from "next/head";
import Avatar from "../components/avatar";
import Image from "next/image";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/footer";
import { useRef } from "react";
import router, { useRouter } from "next/router";
export default function Home() {
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen h-screen">
      <Head>
        <title>Gooble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About </p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <Avatar url="https://cdn.staticneo.com/w/evangelion/Shinji.jpg" />
        </div>
      </header>
      <form className="flex flex-col items-center h-4/6 justify-center flex-grow w-4/5">
        <div className="text-6xl">Gooble</div>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:space-y-0 sm:flex-row sm:space-x-4 w-1/2 space-y-2 justify-center mt-8">
          <button className="btn" onClick={search}>
            Gooble Search
          </button>
          <button className="btn" onClick={search}>
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
