import { useEffect, useState } from "react";
import axios from "axios";

const DashboardFeatures = () => {
  const [data, setData] = useState({});
  const getMe = async () => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get(
        "https://api.spotify.com/v1/browse/categories",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setData(res.data);
      console.log("ini dashboard", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);
  return (
    <div className="bg-black h-screen pt-2 pr-2">
      <div className="bg-[#1E1E1E] w-full h-[500px] rounded-xl pt-2">
        <div className="flex gap-2 flex-wrap justify-center m-2">
          {data?.categories?.items?.slice(0, 18).map((item, index) => (
            <div
              key={index}
              className="w-24 h-24  hover:scale-95 duration-200 hover:shadow-md hover:shadow-gray-500/40 rounded-md"
            >
              <img src={item?.icons[0]?.url} alt="" className="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardFeatures;
