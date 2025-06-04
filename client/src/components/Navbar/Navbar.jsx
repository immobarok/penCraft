import Button from '../Button/Button';
import { assets } from './../../assets/assets';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
      <div className='flex gap-2 items-center'>
        <img src={assets.logo} alt="" className='w-20 sm:w-10' />
        <p className='text-xl sm:text-2xl font-bold text-gradient-to-br to-[#f2126f] from-[#531f88]'>PENCRAFT</p>
      </div>
      <Button size='medium' className="flex gap-3 rounded-md">Login
        <img src={assets.arrow} alt=""  className='w-3.5'/>
      </Button>
    </div>
  )
}

export default Navbar