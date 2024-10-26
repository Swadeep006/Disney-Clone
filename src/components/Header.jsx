/* eslint-disable no-unused-vars */
import React from "react";

function Header() {
    const menu = [
        {
          name: "HOME",
          icon: HiHome,
        },
        {
          name: "SEARCH",
          icon: HiMagnifyingGlass,
        },
        {
          name: "WATCH LIST",
          icon: HiPlus,
        },
        {
          name: "ORIGINALS",
          icon: HiStar,
        },
        {
          name: "MOVIES",
          icon: HiPlayCircle,
        },
        {
          name: "SERIES",
          icon: HiTv,
        },
      ];
      return (
        <>
          <div className="">
            <img src={logo} alt="logo" className="w-[120px] object-cover" />
            {menu.map((item)=>{
              // <HeaderItem name={item.name} Icon={item.icon}/>
              <Header/>
            })}
          </div>
        </>
      );
}

export default Header;
