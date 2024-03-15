import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Feeld from '../assets/feeldtest.png'
import FeldPic from '../assets/feldProf.jpeg'

const testimonials = [
  {
    image: Feeld,
    imagaAlt: 'Feeld',
    content:
      'EngageIq is one of the most powerful tools in our toolkit. It is very Member-friendly. We have been able to share how other teams can modify and self-serve in EngageIq. It has bridged a gap to getting access to Member feedback, and I see all our teams finding ways to use EngageIq to answer Member-related questions. ',
    name: 'Diana Mohammad-Laity',

    role: 'VP of Data',
    avatar: FeldPic,
  },
  {
    image: Feeld,
    imagaAlt: 'Feeld',
    content:
      'EngageIq is one of the most powerful tools in our toolkit. It is very Member-friendly. We have been able to share how other teams can modify and self-serve in EngageIq. It has bridged a gap to getting access to Member feedback, and I see all our teams finding ways to use EngageIq to answer Member-related questions. ',
    name: 'Diana Mohammad-Laity',

    role: 'VP of Data',
    avatar: FeldPic,
  },
  {
    image: Feeld,
    imagaAlt: 'Feeld',
    content:
      'EngageIq is one of the most powerful tools in our toolkit. It is very Member-friendly. We have been able to share how other teams can modify and self-serve in EngageIq. It has bridged a gap to getting access to Member feedback, and I see all our teams finding ways to use EngageIq to answer Member-related questions. ',
    name: 'Diana Mohammad-Laity',

    role: 'VP of Data',
    avatar: FeldPic,
  },
]

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, //

  }
  return (
    <div className='bg-primary w-full h-full font-raleway py-12 flex justify-center'>
      <div className='max-w-full '>
      <Slider { ...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex flex-col items-center w-full border-b-2 border-divider pb-12'
          >
            <div className='mb-6 flex flex-col items-center'>
              <img src={testimonial.image} width={150} height={28} />
            </div>
            <div className='text-white w-full lg:max-w-[70%] mx-auto  px-4  text-center my-6 text-[14px] md:text-[24px] leading-2'>
              {testimonial.content}
            </div>
            <div className='flex justify-center items-center'>
              <div className='mx-2'>
                <img
                  src={testimonial.avatar}
                  width={54}
                  height={54}
                  className='min-w-[54px] min-h-[54px] rounded-full object-cover'
                  alt={testimonial.name}
                />
              </div>
              <div className='text-white'>
                <h3 className='text-[16px] font-semibold'>
                  {testimonial.name}
                </h3>
                <p className='text-[14px]'>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}
export default Testimonial
