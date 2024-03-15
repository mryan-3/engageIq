import React from 'react'
import Feeld from '../assets/feeldtest.png'
import FeldPic from '../assets/feldProf.jpeg'

const Testimonial: React.FC = () => {
  return (
    <div className='bg-primary w-full h-full font-raleway py-12 flex justify-center'>
      <div className='flex flex-col w-full justify-center items-center border-b-2 border-divider pb-12'>
        <div className='mb-6'>
          <img src={Feeld} width={150} height={28} />
        </div>
        <div className='text-white w-full lg:max-w-[70%] px-4 flex text-center my-6 text-[14px] md:text-[24px] leading-2'>
          Enterpret is one of the most powerful tools in our toolkit. It's very
          Member-friendly. We've been able to share how other teams can modify
          and self-serve in Enterpret. It's bridged a gap to getting access to
          Member feedback, and I see all our teams finding ways to use Enterpret
          to answer Member-related questions.
        </div>
        <div className='flex justify-center items-center'>
          <div className='mx-2'>
            <img
              src={FeldPic}
              width={54}
              height={54}
              className='min-w-[54px] min-h-[54px] rounded-full object-cover'
            />
          </div>
          <div className='text-white'>
            <h3 className='text-[16px] font-semibold'>Dina Mohammad-Laity</h3>
            <p className='text-[14px]'>VP of Data</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
