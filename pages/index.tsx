import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import Banner from "../components/Banner";
import Me from "../components/Me";
import MyWorks from "../components/MyWorks";
import Offers from "../components/Offers";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import GoToTop from "../components/GoToTop";

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
        <MyWorks />
        <Testimonial />
        <Contact />
      </div>
      <GoToTop />
    </div>
  );
};

export default Home;
