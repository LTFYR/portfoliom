import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

type Skills = {
  title: string;
};

const SkillLists = ({ title }: Skills) => {
  return (
    <h4 className="text-2xl font-semibold flex items-center gap-4">
      <span className="text-yellow-500">
        <HiChevronDoubleRight />
      </span>
      {title}
    </h4>
  );
};

export default SkillLists;
