import React, { FunctionComponent } from "react";

interface Props {
  Icon: React.ElementType;
  subtitle: string;
  title: string;
}

const Card: FunctionComponent<Props> = ({ Icon, subtitle, title }) => {
  return (
    <div className="w-full shadow-shadow flex flex-col items-center justify-center gap-10 py-16">
      {Icon && <Icon className="text-yellow-500 text-7xl" />}
      <h1 className="text-2xl font-semibold uppercase text-gray-100 tacking-[10px]">
        {title}
      </h1>
      <p className="text-2xl text-gray-100 px-10  text-center leading-[40px]">
        {subtitle}
      </p>
    </div>
  );
};

export default Card;
