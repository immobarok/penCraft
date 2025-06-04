import Navbar from "../components/Navbar/Navbar"
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout