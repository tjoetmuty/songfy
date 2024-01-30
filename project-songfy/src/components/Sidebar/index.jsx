import play from "../../assets/gravity.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const Menu = [
    { path: "/dashboard", title: "Dashboard", src: "home"},
    { path: "/top-artist", title: "Top Artist", src: "Micro" },
    { path: "/top-music", title: "Top Music", src: "Music" },
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
          <div className="flex gap-x-4 items-center pt-4 justify-between">
            <h1
              className={`text-white font-bold text-[32px] pl-4 origin-left ${
                !open && "scale-0"
              }`}
            >
              Songfy
            </h1>
            <img
              src={play}
              alt=""
              className={`w-[19px] h-[19px]  cursor-pointer ${
                !open && "rotate-180"
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
                <img src={`./src/assets/${item.src}.png`} alt={item.title} />
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
