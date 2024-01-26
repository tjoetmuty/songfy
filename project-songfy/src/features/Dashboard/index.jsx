import { useEffect, useState } from "react";
import axios from "axios";

const DashboardFeatures = () => {
  const [data, setData] = useState({})
  const getMe = async () => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get("https://api.spotify.com/v1/browse/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
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
  <div>
    <h1>ini dashboard ya</h1>
    <div className="flex gap-2 flex-wrap">

    {data?.categories?.items?.map((item, index) =>(
      <div key={index} className="bg-black w-24 h-24">
        <h1 className="text-white">{item?.name}</h1>
      </div>
    ))}
    </div>
  </div>
  )
};

export default DashboardFeatures;
