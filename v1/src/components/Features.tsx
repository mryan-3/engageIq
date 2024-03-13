import React from 'react'
import Layer1 from '../assets/Layer_1.webp'
import Layer2 from '../assets/Layer_2.webp'
import Layer3 from '../assets/Layer_3.webp'
import Layer4 from '../assets/Layer_4.webp'
import Layer5 from '../assets/Layer_6.webp'
import Layer6 from '../assets/Layer_7.webp'

const data = [
  {
    image: Layer1,
    title: 'Source of truth',
    description:
      'Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.',
  },
  {
    image: Layer2,
    title: 'Custom Unified Feedback Taxonomy',
    description:
      'Give structure to unstructured customer feedback - customized just for you. Taxonomy adapts to changes in feedback over time.',
  },

  {
    image: Layer3,
    title: 'Powerful semantic search',
    description:
      'Uncomplicated Google-like search across all of your feedback. Search for what the user meant, not just how the user said it.',
  },

  {
    image: Layer4,
    title: 'User-friendly analytics suite',
    description:
      'Built for powerful insights but easy for non-technical operators with pleasant UI, easy to build dashboards, and automated summaries of relevant data.',
  },
  {
    image: Layer5,
    title: 'Partners',
    description:
      'From implementation and onwards, get dedicated data auditors for weekly model refreshes, plus a dedicated CSM partner',
  },
  {
    image: Layer6,
    title: 'Unlimited user seats',
    description:
      'Bring your entire team into EngageIQ without prohibitive costs and foster a culture of customer-centric strategy',
  },
]

const Features: React.FC = () => {
  return (
    <div className='bg-primary w-full min-h-screen font-raleway py-12'>
      <div className='flex flex-col items-center justify-center px-8'>
        <h2 className='text-white my-6 font-raleway font-bold text-[18px] md:text-[20px] '>
          Listen, learn, and act on customer feedback.
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-12'>
          {data.map((d, index) => (
            <div key={index} className='flex flex-col mx-auto w-full h-full'>
              <div className='bg-gradient-text flex flex-col min-h-[4px] min-w-[100%] rounded-[22px]'></div>
              <div className='text-white  border-2 border-dropdownBorder p-6 h-full rounded-b-[12px]'>
                <img src={d.image} width={50} />
                <h3 className='text-[16px] font-semibold my-3'>{d.title}</h3>
                <p className='text-[14px] font-medium leading-[1.7]'>
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Features
