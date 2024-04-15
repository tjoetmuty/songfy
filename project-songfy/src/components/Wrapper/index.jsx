import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Wrapper = () => {
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
