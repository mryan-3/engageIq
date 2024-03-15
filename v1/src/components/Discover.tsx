import React from 'react'
import Logo from '../assets/anom-min.png'
import { Button } from './ui/button'

const Discover: React.FC = () => {
    return (
        <div className='bg-primary w-full h-full py-12 font-raleway'>
            <div className='flex flex-col items-center md:flex-row border-b-2 border-divider'>
                <div className='p-2'>
                    <img src={Logo} />
                </div>
                <div className='flex flex-col justify-center px-8 w-full lg:w-[50%]'>
                    <h2 className='text-gradient1 my-6 font-raleway text-[18px] md:text-[20px] uppercase'>
                        Discover
                    </h2>
                    <h3 className='text-white text-[2rem] font-bold mb-6 '>
                        Surface the insights that matter
                    </h3>
                    <div className='text-white text-[16px] flex flex-col space-y-2 justify-center w-full'>
                        <div className='flex items-baseline space-x-3'>
                            <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
                            <div className='md:max-w-[80%]'>
                                Go beyond high-level topics and understand granular reasons behind feeedback trends.
                            </div>
                        </div>
                        <div className='flex items-baseline space-x-2'>
                            <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
                            <div className='md:max-w-[80%]'>
                                Compare and contrast different user segments and metadata
                            </div>
                        </div>
                        <div className='flex items-baseline space-x-2'>
                            <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
                            <div className='md:max-w-[80%]'>
                                Detect and get alerted about anomalously rising feddback trends.
                            </div>
                        </div>

                    </div>
                    <div className='my-6'>
                        <Button className='hover:bg-hoverCTAButton bg-primary border-2 border-gradient2 rounded-full font-bold cursor-pointer px-8 py-6'>
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Discover
