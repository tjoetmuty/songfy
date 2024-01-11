import { Route, Routes} from 'react-router-dom'
import TopArtist from './pages/TopArtist'
import Login from './pages/Login'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/top-artist' element={<TopArtist/>}></Route>
    </Routes>
  )
}

export default App