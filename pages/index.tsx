import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/elements/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Late me</title>
        <meta name="description" content="Dwi Darma Personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Header />
        </header>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
