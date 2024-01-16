import play from "../../assets/gravity.png"
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menu = [
    {title: "Top Artist", src: "Micro"},
    {title: "Top Music", src: "Music"},
    {title: "Recently Played", src: "Delivery-Time"},
  ]
  
  return (
    <>
      <div className="bg-black flex gap-2 px-2 py-2">
        <div
          className={`${
            open ? `w-[242px]` : `w-[84px]`
          } duration-300 h-screen bg-[#1E1E1E] relative rounded-md`}
        >
          <div className="flex ">
            <h1 className={`text-white  font-bold text-[32px] ${!open && "scale-0"}`}>Spotify</h1>
            <img
              src={play}
              alt=""
              className={`absolute w-[19px] h-[19px] mt-4 ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul>
            {Menu.map((menu, index) => (
              <li key={index}>
                <img src={`/assets/${menu.src}`} alt="" />
                <span className={`text-white ${!open && "hidden"} origin-lef duration-200`}>{menu.title}</span>
              </li>
            
            ))}
          </ul>
        </div>
        <div className="bg-[#1E1E1E] w-full rounded-md">
          <h1 className="text-white">Good Morning</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
