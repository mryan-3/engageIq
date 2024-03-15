import { ArrowRight } from 'lucide-react'
import React from 'react'

const EngageAdvantage: React.FC = () => {
    return (
        <div className='w-full h-full bg-primary py-12 font-raleway flex justify-center items-center'>
            <div className='flex justify-center px-8 gap-4 w-full md:w-[90%] lg:max-w-[70%] mx-auto border-b-2 border-divider py-20'>
                <div className='bg-gradient-text flex flex-col min-h-[100%] min-w-[6px] rounded-[22px]'></div>
                <div className='flex flex-col justify-start min-w-[70%] md:max-w-[80%]'>
                    <h2 className='text-gradient1 py-2 font-raleway text-[18px] md:text-[1rem] uppercase tracking-widest font-bold leading-[1.4]'>
                        The EngageIq Advantage</h2>
                    <div className='text-white text-[20px] md:text-[24px] font-semibold block text-left leading-[1.7] md:leading-[2.5]'>
                        EngageIQ automatically unifies your customer feedback across all
                        data types and builds adaptive AI models tailored to your feedback
                        architecture, delivering precise and granular insights.
                    </div>
                    <div className='text-gradient1 flex items-center text-[20px] hover:text-[#d220ff]'>
                        <span className='bg-gradient-text text-transparent bg-clip-text text-[20px] hover:text-[#d220ff]'>
                            <a href='/'>
                                Get Started
                            </a>
                        </span>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EngageAdvantage
