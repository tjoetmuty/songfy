import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { History } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { SquarePlay } from "lucide-react";
import play from "../../assets/chevron-right.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-black ">
        <div
          className={`${
            open ? `w-[242px]` : `w-[80px]`
          } h-screen bg-[#1E1E1E] text-white p-5 pt-8 relative duration-300 rounded-xl m-2`}
        >
          <img
            src={play}
            className={`absolute cursor-pointer -right-3 top-12 w-8 border-2 border-[#1E1E1E]  rounded-full bg-white ${
              open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex items-center gap-x-2 p-2">
            <SquarePlay />
            <h1
              className={`text-white origin-left font-semibold text-3xl duration-300 ${
                !open && "hidden"
              }`}
            >
              Songfy
            </h1>
          </div>
          <hr className="mx-0 mt-6 origin-left" />
          <div
            className={` ${
              open ? "justify-between" : "justify-center"
            } pt-6 flex flex-col gap-4  items-start`}
          >
            <div className="flex gap-2 hover:bg-gray-500 w-full hover:rounded-md p-2">
              <Home />
              <p
                className={`${!open && "hidden"}  duration-200 cursor-pointer `}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </p>
            </div>
            <div className="flex gap-2 hover:bg-gray-500 w-full hover:rounded-md p-2">
              <History />
              <p
                className={`${!open && "hidden"} duration-200 cursor-pointer`}
                onClick={() => navigate("/recently-played")}
              >
                Recently Played
              </p>
            </div>
            <div className="flex gap-2 hover:bg-gray-500 w-full hover:rounded-md p-2">
              <LibraryBig />
              <p
                className={`${!open && "hidden"} duration-200 cursor-pointer`}
                onClick={() => navigate("/playlist")}
              >
                Playlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
