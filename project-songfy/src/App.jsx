import "./App.css";

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen bg-img flex justify-center items-center">
        <div>
          <h1 className="text-white font-bold text-[60px]">Songfy</h1>
          <p className="text-white text-[20px]">
            Discover, listen to, and enjoy millions of songs from around the
            world.
          </p>
          <div className="flex justify-center mt-6">
            <button className="text-white w-48 h-8 flex justify-center items-center bg-bluee b">
              Login With Spotify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
