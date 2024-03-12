import React from 'react'
import Logo from '../assets/Logo.webp'
import { LinkedinIcon, Mail, Twitter, YoutubeIcon } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <div className='w-full h-full bg-primary pt-12 font-raleway flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row-reverse gap-12'>
        <div className='grid grid-cols-2 md:grid-cols-3 md:justify-between gap-12 justify-start  '>
          <div className=' flex flex-col gap-2 px-8'>
            <h2 className='text-white text-[17px] sm:text-[20px] font-bold '>Company</h2>
            <ul className='text-[#d8d3ff] mt-1 '>
              <li className='py-2'>
                <a>Home</a>
              </li>
              <li className='py-2'>
                <a>About Us</a>
              </li>
              <li className='py-2'>
                <a>Careers</a>
              </li>
              <li className='py-2'>
                <a>Press</a>
              </li>
            </ul>
          </div>

          <div className=' flex flex-col gap-2  '>
            <h2 className='text-white text-[17px] sm:text-[20px] font-bold '>Product</h2>
            <ul className='text-[#d8d3ff]  mt-1'>
              <li className='py-2'>
                <a>Changelog</a>
              </li>
              <li className='py-2 '>
                <a>Integrations</a>
              </li>
              <li className='py-2'>
                <a>Templates</a>
              </li>
              <li className='py-2 text-wrap'>
                <a>See EngageIq in Action</a>
              </li>
              <li className='py-2'>
                <a>Status Page</a>
              </li>
            </ul>
          </div>

          <div className=' flex flex-col gap-2 px-8  '>
            <h2 className='text-white font-bold text-[20px] '>Resources</h2>
            <ul className='text-[#d8d3ff]'>
              <li className='py-2'>
                <a>Privacy Policy</a>
              </li>
              <li className='py-2'>
                <a>Security</a>
              </li>
              <li className='py-2'>
                <a>Commitment to Privacy</a>
              </li>
              <li className='py-2'>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-[#d9d3ff] mb-8   text-[20px] px-8 flex flex-col'>
          <img src={Logo} width={206} height={36} />
          <div className='py-8'>
            <p>Customer Feedback Analytics</p>
            <p>like it was supposed to be!</p>
          </div>
          <div className='flex gap-2 flex-wrap '>
            <a>
              <LinkedinIcon width={30} />
            </a>
            <a>
              <Twitter width={50} />
            </a>
            <a>
              <YoutubeIcon width={50} />
            </a>
            <a>
              <Mail width={50} />
            </a>
          </div>
          <div className='my-6'>
            <img
              width={250}
              src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=411886&theme=light'
            />
          </div>
          <div className='border-b-2 border-divider pb-2'>
          <p className='text-left'>Copyright © Enterpret Inc. 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
