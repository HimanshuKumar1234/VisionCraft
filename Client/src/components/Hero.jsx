import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'> Create Amazing Content <br/> with <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Ai Tools</span></h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto  max-sm:text-xs text-gray-700'>
          Tranform your Content Creation. with our suite of Premium AI Tools. Write Articles , Generate Images, and enhance your Workflow.
        </p>
      </div>
    


      <div className='flex flex-wrap  justify-center gap-4 text-sm max-sm:text-xs'>
        <button onClick={()=> navigate('/ai')} className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start Creating Now</button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer">Watch Demo</button>
      </div>

      <div className='flex items-center gap-4 mt-8 mx-auto text-gray-900'>
        <img src={assets.user_group} alt="" className='h-8'/> Trusted By 10k People
      </div>



    </div>
  )
}

export default Hero