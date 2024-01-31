import { Route, Routes } from "react-router-dom";
import TopArtist from "./pages/TopArtist";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";
import Playlist from "./pages/Playlist";
import Dashboard from "./pages/Dashboard";
import { RecentlyPlayed } from "./pages/RecentlyPlayed";
import  PlaylistDetail from "./pages/Playlist/playlistDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route element={<Wrapper/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/top-artist" element={<TopArtist />}></Route>
        <Route path="/recently-played" element={<RecentlyPlayed />}></Route>
        <Route path="/playlist" element={<Playlist/>}></Route>
        <Route path="/playlist/:id" element={<PlaylistDetail/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
