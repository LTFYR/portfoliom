import React from "react";
import Card from "./Card";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";

const Offers = () => {
  return (
    <section id="offers" className="bg-black text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          MY OFFER
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <Card
            title="BRANDING"
            subtitle="I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction"
            Icon={RxCopy}
          />
          <Card
            title="BRANDING"
            subtitle="I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction"
            Icon={SiAntdesign}
          />
          <Card
            title="BRANDING"
            subtitle="I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction"
            Icon={FaChartPie}
          />
          <Card
            title="BRANDING"
            subtitle="I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction"
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;

// flex flex-col justify-between flex-wrap
