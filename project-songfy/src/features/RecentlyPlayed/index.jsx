import axios from "axios";
import { useEffect, useState } from "react"

const RecentlyPlayedFeat = () => {
  const [data, setData] = useState({})
  const getRecently = async () => {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res.data);
      console.log("ini recently played", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRecently();
  }, []);
  return (
    <div className="bg-black w-full  pr-2 h-screen">
      <div className="bg-[#1E1E1E] w-full rounded-xl p-2 h-[669px] overflow-y-auto">
        <div className="m-4">
            <h1 className="text-white font-bold text-[30px]">Recently Played</h1>
        </div>
        <div className="flex flex-wrap gap-8 m-4">
          {data?.items?.map((item, index) => (
            <div
              key={index}
              className=" bg-[#0B0A0A] w-[210px] h-[290px] shadow-xl duration-200 hover:shadow-md hover:bg-[#282828] rounded-md cursor-pointer"
            >
              <div>
                <div className="flex justify-center ">
                  <img
                    src={item?.track?.album?.images[0]?.url}
                    alt=""
                    className="w-[170px] h-[170px] rounded-md shadow-xl mt-4"
                  />
                </div>
                <div className="ml-5 mt-4">
                  <h1 className="font-bold text-white truncate mr-4">{item?.track?.album?.name}</h1>
                  <p className="text-white">{item?.track?.album?.artists[0]?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentlyPlayedFeat
