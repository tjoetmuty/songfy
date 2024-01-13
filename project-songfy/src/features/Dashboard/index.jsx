import  { useState } from 'react'
import Sidebar from '../../components/Sidebar'

const DashboardFeatures = () => {
    const [open, setOpen] = useState (true)
  return (
    <>
    <div className='bg-black'>
        <Sidebar/>
    </div>
    </>
  )
}

export default DashboardFeatures