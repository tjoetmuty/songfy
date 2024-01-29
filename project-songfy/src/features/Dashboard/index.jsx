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
    <div className="bg-black w-full pt-2 pr-2">
      <div className="bg-[#1E1E1E] w-full rounded-xl p-2">
        <div className=" gap-2 m-2 ">
          {data?.categories?.items?.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="w-[999x] h-[230px] shadow-xl hover:scale-[1.0] duration-200 hover:shadow-md hover:shadow-gray-500/40 rounded-md mt-4"
            >
              <div className="flex items-center justify-between p-2">
                <img
                  src={item?.icons[0]?.url}
                  alt=""
                  className="rounded-md w-[210px] h-[210px]"
                />
                <h1 className="text-white font-semibold text-[50px] mr-[20px]">{item?.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardFeatures;
