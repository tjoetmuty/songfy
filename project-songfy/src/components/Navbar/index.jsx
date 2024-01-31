import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState("");
  const getMe = async () => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res?.data);
      setImages(res?.data?.images[0]?.url);
      console.log("ini navbar", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="bg-[#5B3838] rounded-md ">
          <div className="flex items-center pt-2 px-4 justify-between">
            <h1 className="text-white font-bold text-[30px]">Hello</h1>
            <div className="flex items-center gap-2">
              <img
                src={data?.images[0]?.url}
                alt=""
                className="rounded-full w-[30px] h-[30px] border-4 border-[#282828]"
              />
              <h1 className="text-white">{data?.display_name}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
