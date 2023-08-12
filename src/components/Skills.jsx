import React from 'react'
import {dataImage} from "../assets/dataImage"

const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skill</p>
                <p className='py-4'>these are technologies</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             {dataImage.map((data,index)=>(
                   <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' key={index}>
                    <img className='w-20 mx-auto' src={data.source} alt={data.desc} />
                    <p className='my-4'>{data.name}</p>
                   </div>
             ))}
                
            </div>
        </div>
    </div>
  )
}

export default Skills