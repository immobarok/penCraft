import { assets } from "../../assets/assets"
import Button from './../Button/Button';

const Hero = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className='text-center mt-10 sm:mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-2 mb-4 border border-purple-600 bg-purple-100 rounded-full text-sm'>
          <p className="text-sm font-medium text-purple-700">New: AI feature integrated</p>
          <img src={assets.star_icon} alt="" className='w-2.5' />
        </div>
        <div className="space-y-5 flex flex-col">
          <h1 className="text-4xl sm:text-5xl font-bold ">Your own <span className='font-bold bg-gradient-to-r to-[#eb3af3] from-[#794ffb] bg-clip-text text-transparent'>blogging </span> <br /> platform.</h1>
          <p className="my-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe <br /> libero aspernatur laudantium sapiente reprehenderit eveniet repellat voluptatibus facere, at non,<br></br> fuga earum cumque officia doloremque incidunt facilis!</p>
        </div>
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto my-3 border border-purple-300 rounded-md pr-1.5 pl-4 py-1">
          <input type="text" placeholder="Search blog" required className="w-full pl-4 outline-none text-purple-800 font-medium" />
          <Button size="medium" className="rounded-md">Search</Button>
        </form>
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Hero