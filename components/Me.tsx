import React from "react";
import Skilllists from "./Skilllists";

const Me = () => {
  return (
    <section id="me" className="w-full h-full bg-black text-white py-28 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl font-semibold text-center">About me</h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed ">
          Hi! I’m [name]. I’m a student of [school name], and I want to get into
          the field of [field name]. I love writing, and my favorite thing is to
          create stories that bring people together. I’ve been working on my
          portfolio since high school, but now it’s time to show the world what
          I’ve got. And that’s why I’ve created this website—so you can see my
          work so far and get a sense of who I am as a writer. If you’d like to
          learn more about me, check out my blog at [blog address]. You can also
          follow me on social media at [social media profile URLs]. Best wishes,
        </p>
        <h2 className="text-xl md:text-3xl font-medium md:leading-relaxed text-center">
          My Skills
        </h2>
        <div className="mew800 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skilllists title="Web developer" />
          <Skilllists title="React developer" />
          <Skilllists title="Asp.Net Core developer" />
          <Skilllists title="NodeJS developer" />
          <Skilllists title="Designer" />
          <Skilllists title="SASS,SCSS" />
          <Skilllists title="Responsive" />
          <Skilllists title="Web developer" />
        </div>
      </div>
    </section>
  );
};

export default Me;
