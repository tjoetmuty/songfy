import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState("");
  const user = "https://open.spotify.com/user/pwjxjuk2fvz5an90skhu6bhfe";
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
        <div className="bg-[#5B3838] rounded-xl mx-2">
          <div className="flex px-4 items-center justify-between">
            <div className="flex items-center gap-2 p-2">
              <h1 className="text-white font-thin text-[30px]">Welcome</h1>
              <h1 className="text-white font-semibold text-[30px]">
                {data?.display_name}
              </h1>
            </div>
            <div className="flex items-center gap-2 p-2">
              <img
                src={images}
                alt="profile photo"
                className="rounded-full w-[45px] h-[45px] border-4 border-[#282828]"
                onClick={user}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
