import { useEffect, useState } from "react"
import axios from "axios"

const Navbar = () => {
  const [data, setData] = useState({})
  const getMe = async () => {
    try{
      // eslint-disable-next-line no-undef
      const res  = await axios.get('https://api.spotify.com/v1/me' , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      setData(res.data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMe()
  }, [])
  return (
    <div className="w-full h-20 bg-gray-400 rounded-xl flex justify-between items-center p-3">
      <h1 className="font-bold">Hi, {data?.display_name}</h1>
      <img src={data?.images[0]?.url} alt="profile" className="rounded-full w-[50px] h-[50px]" />
    </div>
  )
}

export default Navbar