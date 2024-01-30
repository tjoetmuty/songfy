import axios from "axios";
import { useEffect, useState } from "react";

const PlaylistFeatures = () => {
  const [data, setData] = useState({});
  const getPlaylist = async () => {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res.data);
      console.log("ini playlist", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPlaylist();
  }, []);
  return (
    <div className="bg-black w-full pt-2 pr-2">
      <div className="bg-[#1E1E1E] w-full rounded-xl p-2">
        <div className="m-4">
            <h1 className="text-white font-bold text-[30px]">Public Playlist</h1>
        </div>
        <div className="flex flex-wrap gap-8 m-4">
          {data?.items?.map((item) => (
            <div
              key={item?.id}
              className=" bg-[#0B0A0A] w-[210px] h-[290px] shadow-xl duration-200 hover:shadow-md hover:bg-[#282828] rounded-md cursor-pointer"
            >
              <div>
                <div className="flex justify-center ">
                  <img
                    src={item?.images[0]?.url}
                    alt=""
                    className="w-[170px] h-[170px] rounded-md shadow-xl mt-4"
                  />
                </div>
                <div className="ml-5 mt-4">
                  <h1 className="font-bold text-white">{item?.name}</h1>
                  <p className="text-white">by {item?.owner?.display_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistFeatures;
