import micro from "../../assets/Micro.png";
import music from "../../assets/Music.png";
import recently from "../../assets/Delivery-Time.png";

const Sidebar = () => {
  return (
    <>
      <div className={`${open ? `w-[242px]` : `w-[84px]`} bg-[#1E1E1E] `}> 
        <div>
          <h1 className="text-white">Spotify</h1>
          <img src="" alt="" />
        </div>
        <div className="flex">
          <img src={micro} alt="" />
          <p className="text-white">Top Artist</p>
        </div>
        <div className="flex">
          <img src={music} alt="" />
          <p className="text-white">Top Music</p>
        </div>
        <div className="flex">
          <img src={recently} alt="" />
          <p className="text-white">Recently Played</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
