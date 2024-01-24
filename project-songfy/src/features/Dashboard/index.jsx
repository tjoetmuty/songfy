import { useEffect, useState } from "react";
import axios from "axios";

const DashboardFeatures = () => {
  const [dash, setDash] = useState({})
  const getMe = async () => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get("https://api.spotify.com/v1/browse/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setDash(res.data);
      console.log("ini dashboard", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);
  return (
  <div>ini dashboard ya
    {dash?.categories?.items?.map((data, index) =>(
      <div key={index}>
        {data?.items[0]?.href}
      </div>
    ))}
  </div>
  )
};

export default DashboardFeatures;
