import { useEffect, useState } from "react";
import {
  AUTHORIZE_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE_PARAM,
} from "../../helpers/config";
import { useNavigate } from "react-router-dom";

const LoginFeatures = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_PARAM}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const access_token = params.get(`access_token`);

    if (access_token) {
      localStorage.setItem("access_token", access_token);
      setToken(access_token);
     
    }
  }, []);


  return (
    <>
      <div className="h-screen w-full bg-cover bg-center flex items-center justify-center bg-img ">
        <div>
          <h1 className="text-white font-bold text-[60px] flex justify-center">
            Songfy
          </h1>
          <p className="text-white text-[20px]">
            Discover, listen to, and enjoy millions of songs from around the
            world.
          </p>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                token ? navigate('/dashboard') : handleLogin()
              }}
              className="text-white font-semibold w-48 h-10 flex justify-center items-center bg-[#0A68AB] rounded hover:bg-blue-900"
            >
              {token ? "Go to Dashboard" : "Login with Spotify"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginFeatures;
