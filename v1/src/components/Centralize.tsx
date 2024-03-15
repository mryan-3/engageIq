import React from 'react'
import { Button } from './ui/button'
import Logo from '../assets/taxonomy-min.webp'

const Centralize: React.FC = () => {
    return (
        <div className='bg-primary w-full h-full font-raleway py-12'>

            <div className='flex flex-col items-center md:flex-row-reverse border-b-2 border-divider'>
                <div className='p-2'>
                    <img
                        src={Logo}

                    />
                </div>
                <div className='flex flex-col justify-center px-8 w-full lg:w-[50%]'>
                    <h2 className='text-gradient1 my-6 font-raleway text-[18px] md:text-[20px] uppercase'>
                        Centralize
                    </h2>
                    <h3 className='text-white text-[1.5rem] font-bold mb-6 '>
                        Consolidate and organize customer feedback in hours not days
                    </h3>
                    <div className='text-white text-[16px] flex flex-col space-y-2 justify-center w-full'>
                        <div className='flex items-baseline space-x-3'>
                            <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
                            <div className='md:max-w-[80%]'>
                                Centralize all customer feedback in a matter of minutes - social media, sales calls, support tickets, community forums.
                            </div>
                        </div>
                        <div className='flex items-baseline space-x-2'>
                            <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
                            <div className='md:max-w-[80%]'>
                                Automatic data pull with custom business logic enabled through powerful native integrations.
                            </div>
                        </div>
                        <div className='flex items-baseline space-x-2'>
                            <div className='bg-gradient-text bg-no-repeat bg-center h-3 w-3 rounded-full min-w-[12px] min-h-[12px] '></div>
                            <div className='md:max-w-[80%]'>
                                Customer feedback across all sources is tagged with the same feedback taxonomy.
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
export default Centralize
