import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState('')
  const getMe = async () => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res?.data);
      setImages(res?.data?.images[0]?.url)
      console.log("ini navbar", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, [data]);
  return (
    
      <div className="h-20 bg-[#5B3838] rounded-xl flex justify-between items-center px-3">
        <div className="flex gap-1">
          <h1 className="font-bold text-[30px] text-white">Welcome </h1><br />
          <p className="italic text-[30px] text-white"> {data?.display_name}</p>
        </div>
        <img src={images} alt="gambarku" className="rounded-full w-[64px] h-[64px]"/>
      </div>
    
  );
};

export default Navbar;
