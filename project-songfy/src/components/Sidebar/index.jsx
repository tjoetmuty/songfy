import play from "../../assets/gravity.png";
import { useState } from "react";
import SayHello from "../Greetings";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menu = [
    { title: "Top Artist", src: "Micro" },
    { title: "Top Music", src: "Music" },
    { title: "Recently Played", src: "Delivery-Time" },
  ];
  console.log(Menu[0]);
  return (
    <>
      <div className="bg-black flex gap-2 px-2 py-2">
        <div
          className={`${
            open ? `w-[242px]` : `w-[84px]`
          } duration-300 h-screen bg-[#1E1E1E] relative rounded-md `}
        >
          <div className="flex gap-x-4 items-center pt-4 justify-between">
            <h1
              className={`text-white font-bold text-[32px] pl-4 origin-left ${
                !open && "scale-0"
              }`}
            >
              Spotify
            </h1>
            <img
              src={play}
              alt=""
              className={`absolute w-[19px] h-[19px]  cursor-pointer ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <hr className="mx-4 my-[24px]"/>
          <ul>
            {Menu.map((menus, index) => (
              <li key={index} className="text-white text-md flex items-center gap-x-4 p-4 mx-2 hover:bg-[#737373] rounded-md">
                <img src={`./src/assets/${menus.src}.png`} alt={menus.title} />
                <p
                  className={`text-white ${
                    !open && "hidden"
                  } origin-lef duration-200`}
                >
                  {menus.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#5B3838] w-full rounded-md pl-4 pt-4">
          <SayHello />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
