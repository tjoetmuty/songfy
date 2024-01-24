import { useEffect, useState } from "react";

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
      setData(123, res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);
  return (
  <div>ini dashboard</div>
  )
};

export default DashboardFeatures;
