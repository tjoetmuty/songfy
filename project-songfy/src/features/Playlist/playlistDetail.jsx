/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PlaylistDetailFeat = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

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
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);
  return <div></div>;
};

export default PlaylistDetailFeat;
