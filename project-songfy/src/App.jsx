import { Route, Routes } from "react-router-dom";
import TopArtist from "./pages/TopArtist";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route element={<Wrapper/>}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/top-artist" element={<TopArtist />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
