import { Route, Routes} from 'react-router-dom'
import TopArtist from './pages/TopArtist'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/top-artist' element={<TopArtist/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App