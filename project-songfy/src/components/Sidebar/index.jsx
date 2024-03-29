import play from "../../assets/gravity.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const Menu = [
    { path: "/dashboard", title: "Dashboard", src: "home"},
    { path: "/recently-played", title: "Recently Played", src: "Delivery-Time" },
    { path: "/playlist", title: "Playlist", src: "playlist" },
  ];
  return (
    <>
    <div className="bg-black">
      <div className=" flex gap-2 px-2 py-2">
        <div
          className={`${
            open ? `w-[242px]` : `w-[84px]`
          } duration-300 h-screen bg-[#1E1E1E] relative rounded-md `}
        >
          <div className={`flex gap-x-4 items-center pt-4 ${open ? "justify-between":"justify-center"} `}>
            <h1
              className={`text-white font-bold text-[32px] pl-4 origin-left ${
                !open && "hidden"
              }`}
            >
              Songfy
            </h1>
            <img
              src={play}
              alt=""
              className={`w-[19px] h-[19px]  cursor-pointer mr-4 ${
                !open && "rotate-180 mr-0"
              }`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <hr className="mx-4 my-[24px]" />
          <ul>
            {Menu.map((item, index) => (
              <li
                key={index}
                className="text-white text-md flex items-center gap-x-4 p-4 mx-2 hover:bg-[#737373] rounded-md cursor-pointer duration-200"
              >
                <img src={`./src/assets/${item.src}.png`} alt={item.title} className="w-[26px] h-[26px]"/>
                <p
                  className={`text-white ${
                    !open && "hidden"
                  } origin-lef duration-100`}
                  onClick={() => navigate(item?.path)}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
