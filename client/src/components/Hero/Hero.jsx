import { assets } from "../../assets/assets"

const Hero = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-purple-600 bg-purple-50 rounded-full text-sm'>
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="" className='w-2.5' />
        </div>
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Hero