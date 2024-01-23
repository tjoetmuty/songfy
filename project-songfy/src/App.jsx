import { Route, Routes } from "react-router-dom";
import TopArtist from "./pages/TopArtist";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";
import DashboardFeatures from "./features/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route element={<Wrapper/>}>
        <Route path="/dashboard" element={<DashboardFeatures />}></Route>
        <Route path="/top-artist" element={<TopArtist />}></Route>
        {/* <Route path="/top-music" element={<topMusic />}></Route>
        <Route path="/recently-played" element={<TopArtist />}></Route> */}
      </Route>
    </Routes>
  );
};

export default App;
