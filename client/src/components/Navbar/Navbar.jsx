import { Navigate } from 'react-router';
import Button from '../Button/Button';
import { assets } from './../../assets/assets';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
      <div className='flex gap-2 items-center cursor-pointer'>
        <img onClick={Navigate('/')} src={assets.logo} alt="" className='w-20 sm:w-10' />
        <p className='text-3xl font-bold bg-gradient-to-l to-[#eb3af3] from-[#794ffb] hover:from-blue-600/50 bg-clip-text text-transparent'>PENCRAFT</p>
      </div>
      <Button size='medium' className="flex gap-1 rounded-md">Login
        <img src={assets.arrow} alt="" className='w-3.5' />
      </Button>
    </div>
  )
}

export default Navbar