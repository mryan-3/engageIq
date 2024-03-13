import React from 'react'
import Logo from '../assets/Group 3.webp'
import { Button } from './ui/button'

const MainIntegration: React.FC = () => {
  return (
    <div className='bg-primary w-full h-fit py-12 flex justify-center items-center font-raleway'>
      <div className='flex flex-col lg:flex-row-reverse items-center justify-between border-b-2 border-divider'>
        <div className='p-2 flex justify-center items-center'>
          <img src={Logo} width={601} className='mb-12' />
        </div>
        <div className='px-8 flex flex-col my-6 justify-center w-full lg:w-[50%]'>
          <h2 className='text-gradient1 my-6 font-raleway text-[18px] md:text-[20px] uppercase'>
            Integrations
          </h2>
          <h3 className='text-white mb-6 text-[36px] md:text-[38px] font-semibold '>
            Unified view of your customers
          </h3>
          <p className='text-white text-[18px] md:text-[20px] font-light leading-7'>
            EngageIQ will integrate directly with any feedback channel. Take
            advantage of our CSV importer or API.
          </p>
          <div className='flex w-full justify-start my-6'>
            <Button className='hover:bg-hoverCTAButton bg-primary border-2 border-gradient2 rounded-full font-bold cursor-pointer px-8 py-4'>
              View all integrations
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainIntegration
