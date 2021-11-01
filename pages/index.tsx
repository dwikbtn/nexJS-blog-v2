import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/elements/Header";
import { Hero } from "../components/elements/Hero";
import { LatestNews } from "../components/elements/LatestNews";

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
          <Hero />
        </header>
        <section>
          <LatestNews />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
