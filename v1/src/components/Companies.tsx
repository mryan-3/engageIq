import React from "react"
import Canva from '../assets/Canva.webp'
import Descript from '../assets/descript.webp'
import Apollo from '../assets/Apollo.webp'
import Linear from '../assets/Linear.webp'
import Notion from '../assets/Notion.webp'
import Loom from '../assets/loom.webp'
import Arc from '../assets/arc.png'
import Coda from '../assets/coda.png'


const Companies:React.FC = () => {
    return (
        <div className="w-full bg-primary h-full py-24 flex flex-col justify-center items-center ">
        <h2 className="text-center text-white  mb-6 font-raleway text-[16px]">Trusted by customer-led product companies</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-8 border-divider py-10 border-b-2">
            <img src={Canva} width={125} />
            <img src={Descript} width={125}/>
            <img src={Apollo} width={125}/>
            <img src={Linear} width={125}/>
            <img src={Notion} width={125}/>
            <img src={Loom} width={125}/>
            <img src={Arc} width={125}/>
            <img src={Coda} width={125}/>

        </div>
        </div>
    )
}
export default Companies
