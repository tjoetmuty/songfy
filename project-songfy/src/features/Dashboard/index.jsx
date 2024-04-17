import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from 'antd';
// import { Carousel } from "antd";

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

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  useEffect(() => {
    getMe();
  }, []);
  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-[#1E1E1E] rounded-xl p-2 h-max mx-2">
        <div className="mx-2">
          <Input placeholder="What do you want to listen?" className="w-1/4"/>
        </div>
        <div className="flex">
          <div className="grow gap-2 m-2 flex flex-col">
            {data?.categories?.items?.slice(0, 3).map((item) => (
              <div
                key={item?.id}
                className="bg-[#0B0A0A] w-full h-[70px] flex shadow-xl hover:scale-[1.0] duration-200 hover:shadow-md hover:shadow-gray-500/40 rounded-md "
              >
                <div className="flex items-center justify-between p-2 gap-2">
                  <img
                    src={item?.icons[0]?.url}
                    alt=""
                    className="rounded-md w-[50px] h-[50px]"
                  />
                  <h1 className="text-white font-semibold text-md">
                    {item?.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="grow gap-2 m-2 flex flex-col">
            {data?.categories?.items?.slice(4, 7).map((item) => (
              <div
                key={item?.id}
                className="bg-[#0B0A0A] w-full h-[70px] flex shadow-xl hover:scale-[1.0] duration-200 hover:shadow-md hover:shadow-gray-500/40 rounded-md "
              >
                <div className="flex items-center justify-between p-2 gap-2">
                  <img
                    src={item?.icons[0]?.url}
                    alt=""
                    className="rounded-md w-[50px] h-[50px]"
                  />
                  <h1 className="text-white font-semibold text-md">
                    {item?.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFeatures;
