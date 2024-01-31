import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPlaylist = () => {
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
  return {
    data,
    getPlaylist,
  };
};
