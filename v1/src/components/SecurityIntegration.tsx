import React from 'react'
import Security from '../assets/Group 1.webp'
import { Button } from './ui/button'

const SecurityIntegration: React.FC = () => {
  return (
    <div className='bg-primary font-raleway flex justify-center items-center  py-12 w-full h-full '>
      <div className='grid grid-cols-1  lg:grid-cols-2 w-full max-w-[80%] justify-center items-center border-b-2 border-divider my-6  '>
        <div className='p-2 flex justify-center items-center'>
          <img src={Security} width={410.5} className='mb-12' />
        </div>
        <div className='flex flex-col my-6   justify-center px-8'>
          <h2 className='text-gradient1 my-6 font-raleway text-[18px] md:text-[20px] uppercase'>
            Security
          </h2>
          <h3 className='text-white mb-6 text-[36px] md:text-[38px] font-semibold inline'>
            Built for scale
            <h3 className='text-white mb-6 text-[36px] md:text-[38px] font-semibold inline'>
              {' '}
              and enterprise level security
            </h3>
          </h3>
          <p className='text-white text-[18px] md:text-[20px] font-light leading-7'>
            SOC-2 Type || certification, penetration tested, and regular
            vulnerability scans. Hosted behind a VPC. Data encryption at rest
            and transit.
          </p>
          <div className='flex w-full justify-start  my-6'>
            <Button className='hover:bg-hoverCTAButton bg-primary border-2 border-gradient2 rounded-full font-bold cursor-pointer px-8 py-4'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecurityIntegration
