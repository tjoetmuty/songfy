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
      <div className="bg-black py-2">
        <div className="bg-[#5B3838] rounded-md mr-2">
          <div className="flex px-4 items-center justify-between">
            <h1 className="text-white font-bold text-[30px]">Hello</h1>
            <div className="flex items-center gap-2">
              <img
                src={images}
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
