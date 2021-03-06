import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mb-12">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing{" "}
          <code className="">pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
