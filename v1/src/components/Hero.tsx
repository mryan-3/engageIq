import React from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <main className='w-full bg-hero-pattern bg-[50%] bg-no-repeat  relative flex items-center justify-center bg-primary h-full'>
      <div className=' p-6 flex flex-col items-center justify-center w-full'>
        <div className='bg-[#141219b3] absolute top-0 left-0 right-0 bottom-0'></div>
        <div className='relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto md:py-24'>
          <div className='flex flex-col px-2 text-center'>
            <h1 className='font-raleway text-white font-bold text-4xl sm:text-5xl md:text-6xl'>
              Transform customer feedback into
              <span className='bg-gradient-text text-transparent bg-clip-text'>
                {' '}
                product growth
              </span>
            </h1>
            <div className='text-white text-center font-raleway font-medium text-base md:text-lg my-10 mx-auto max-w-3xl'>
              <p>
                All customer feedback unified automatically and categorized
                accurately to empower product orgs to prioritize and build what
                matters.
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-12 gap-4 items-center justify-center'>
            <Button className='hover:bg-hoverCTAButton bg-primary border-2 border-gradient2 rounded-full font-bold cursor-pointer px-8 py-8'>
              Book a Demo
            </Button>
            <Button className='hover:bg-hoverCTAButton border-2 border-gradient2 rounded-full font-bold px-6 py-8 flex items-center justify-center'>
              Take Product Tour
              <Play size={20} className='ml-2' />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
