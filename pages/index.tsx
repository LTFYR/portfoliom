import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import Banner from "../components/Banner";
import Me from "../components/Me";
import Myworks from "../components/Myworks";
import Offers from "../components/Offers";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Gototop from "../components/Gototop";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div>
        <Banner />
        <Me />
        <Offers />
        <Myworks />
        <Testimonial />
        <Contact />
      </div>
      <Gototop />
    </div>
  );
};

export default Home;
