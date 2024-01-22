import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState({});
  const getMe = async () => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);
  return (
    <div className="bg-black w-full">
      <div className="">
      <div className="w-full h-20 bg-[#5B3838] rounded-xl flex justify-between items-center px-3">
        <div className="flex gap-1">
          <h1 className="font-bold text-[40px] text-white">Welcome,</h1>
          <p className="italic text-[40px] text-white"> {data?.display_name}</p>
        </div>
        <img
          src={data?.images[0]?.url}
          alt="profile"
          className="rounded-full w-[50px] h-[50px]"
        />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
