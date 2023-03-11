import type { NextPage } from "next";
import Head from "next/head";
import Landing from "components/landing";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Praise Portfolio</title>
      </Head>
      <Landing />
    </>
  );
};

export default Home;
