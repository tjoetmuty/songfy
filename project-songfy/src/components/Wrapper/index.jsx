import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Wrapper = () => {
  return (
    <div>
      <div className='flex'>
      <Sidebar/>
      <div className='w-full my-2 mr-2'>
      <Navbar/>
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Wrapper