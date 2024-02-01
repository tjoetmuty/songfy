/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import previous from "../../assets/previous.png";

const PlaylistDetailFeat = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [images, setImages] = useState("");

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/playlist");
  };
  const getDetail = async () => {
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/playlists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setData(res.data);
      console.log("ini detail", res.data);
      setImages(res?.data?.images[0]?.url);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="bg-black h-screen">
      <div className="bg-[#1E1E1E] rounded-md px-2 py-2 overflow-y-auto h-[676px]">
        <img
          src={previous}
          className=" text-white cursor-pointer w-[25px] h-[25px]"
          onClick={() => handleNavigate()}
        />
        <div className="text-white flex mt-2">
          <img
            src={images}
            alt="playlist photo"
            className="w-[200px] h-[200px] rounded-md shadow-xl"
          />
          <div className="ml-4 mt-9">
            <h1 className="font-bold text-[80px]">{data?.name}</h1>
            <div className="mt-[1px]">
              <p className="text-white">{data?.description}</p>
              <p className="text-white ">
                {data?.owner?.display_name} - {data?.followers?.total} likes
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#0B0A0A] mt-6 rounded-md pb-3">
          <div className="flex gap-9 m-4 pt-4">
            <div className="w-[300px]">
              <h1 className="text-white font-semibold ml-2"># Title</h1>
            </div>
            <div className="w-[300px] ml-2">
              <h1 className="text-white font-semibold">Album</h1>
            </div>
            <div className="w-[300px]">
              <h1 className="text-white font-semibold">Artist</h1>
            </div>
          </div>
          <hr className="mx-2" />
          {data?.tracks?.items?.map((data, index) => (
            <div key={index} className="">
              <div className="flex hover:bg-[#737373] h-[50px] hover:rounded-md gap-9 m-4 p-4 duration-200">
                <div className="w-[300px] h-full flex items-center">
                  <img
                    src={data?.track?.album?.images[0]?.url}
                    alt=""
                    className="w-[45px] h-[45px] rounded-md"
                  />
                  <p className="text-white ml-4">{data?.track?.name}</p>
                </div>
                <div className="w-[300px] h-full flex items-center">
                  <p className="text-white">{data?.track?.album?.name}</p>
                </div>
                <div className="w-[300px] h-full flex items-center">
                  <div className="text-white">{data?.track?.artists?.map((item, index) => (
                    <p key={item} className="text-white">
                      {item?.name}
                    </p>
                  ))}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default PlaylistDetailFeat;
