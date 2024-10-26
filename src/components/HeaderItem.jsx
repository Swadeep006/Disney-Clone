import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white gap-3 flex items-center text-[15px] cursor-pointer font-semibold hover:underline underline-offset-8">
      <Icon />
      <h2 className="hidden md:block">{name}</h2>
    </div>
  );
}

export default HeaderItem;
