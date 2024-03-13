import React from 'react'
import Logo from '../assets/growth-min.webp'

const Act: React.FC = () => {
  return (
    <div className='bg-primary w-full h-full font-raleway py-12'>
      <div className='flex flex-col items-center md:flex-row-reverse'>
        <div className='p-2'>
          <img
            src={Logo}

          />
        </div>
        <div className='flex flex-col justify-center px-8 w-full lg:w-[50%]'>
          <h2 className='text-gradient1 my-6 font-raleway text-[18px] md:text-[20px] uppercase'>
            Act
          </h2>
          <h3 className='text-white text-[1.5rem] font-bold mb-6 '>
            Confidently drive product strategy with actionable insights
          </h3>
          <div className='text-white text-[16px] flex flex-col space-y-2 justify-center w-full'>
            <div className='flex items-baseline space-x-3'>
              <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
              <div className='md:max-w-[80%]'>
                Filter signal from noise through AI models tailored to your
                feedback architecture.
              </div>
            </div>
            <div className='flex items-baseline space-x-2'>
              <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
              <div className='md:max-w-[80%]'>
                Compare and contrast insights across all essential customer
                segments - Closed Lost Deals vs Closed Won Deals. Power Users vs
                Casual Users.
              </div>
            </div>
            <div className='flex items-baseline space-x-2'>
              <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
              <div className='md:max-w-[80%]'>
                Automated feedback reporting and alerts to up-level your
                execution on what matters the most.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Act
