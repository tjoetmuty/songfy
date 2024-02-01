import { useGetPlaylist } from "../../hooks/useGetPlaylist";
import { useNavigate } from "react-router-dom";

const PlaylistFeatures = () => {
  const { data } = useGetPlaylist();
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    console.log(item.id)
    navigate(`/playlist/${item?.id}`);
  }
  return (
    <div className="bg-black w-full pr-2 h-screen">
      <div className="bg-[#1E1E1E] w-full rounded-xl px-2 py-2 h-[676px] overflow-y-auto">
        <div className="m-4">
          <h1 className="text-white font-bold text-[30px]">Public Playlist</h1>
        </div>
        <div className="flex flex-wrap gap-8 m-4">
          {data?.items?.map((item) => (
            <div
              key={item?.id}
              className=" bg-[#0B0A0A] w-[210px] h-[290px] shadow-xl duration-200 hover:shadow-md hover:bg-[#282828] rounded-md cursor-pointer"
              onClick={() => handleNavigate(item)}
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
