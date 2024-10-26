/* eslint-disable no-unused-vars */
import "./App.css";
import HeaderItem from "./components/HeaderItem";
import logo from "./assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Header from "./components/Header";

function App() {
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

export default App;
