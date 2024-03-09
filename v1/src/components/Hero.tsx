import React from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <main className='w-full relative h-full flex  items-center justify-center bg-primary '>
      <div className=' bg-hero-pattern bg-[50%] bg-no-repeat p-6 flex flex-col items-center justify-center '>
        <div className='bg-[#141219b3] absolute top-0 left-0 right-0 bottom-0'></div>

        <div className=' flex flex-col relative  items-center justify-center '>
          <div className='flex flex-col px-2 lg:w-[60%]'>
            <h1 className='font-raleway text-white font-bold text-center text-[40px] md:text-[52px] '>
              Transform customer feedback into
              <span className='bg-gradient-text text-transparent bg-clip-text'>
                {' '}
                product growth
              </span>
            </h1>
            <div className=' text-white text-center font-raleway font-medium text-[16px] md:text-[20px]  leading-[1.6] my-10 mx-auto w-full'>

              <p>
                All customer feedback unified automatically and categorized
                accurately to empower product orgs to prioritize and build what
                matters.
              </p>
            </div>
          </div>
          <div className='flex md:gap-12 gap-4 items-center justify-center'>
            <Button className='hover:bg-hoverCTAButton bg-primary border-2 border-gradient2 rounded-full  font-bold cursor-pointer'>
              Book a Demo
            </Button>
            <Button className='hover:bg-hoverCTAButton border-2 border-gradient2 rounded-full  font-bold '>
              Take Product Tour
              <Play size={20}/>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
