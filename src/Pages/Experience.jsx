import React from 'react'
import ExperienceRow from './ExperienceRow'
import Atropos from 'atropos/react';

const Experience = () => {
  return (
    <>

      <div className='flex flex-col md:flex-row-reverse items-center gap-x-4 gap-y-6 flex-wrap justify-evenly px-6 md:px-0 '>
        
      <div className='w-full hidden md:flex justify-center items-center md:w-[40%]'>
        <img src="./exp.png" alt="" srcset="" className='image hover:scale-105 drop-shadow-2xl transition-all duration-300 hover:transform hover:scale-x-[0.7] hover:skew-y-3'/>
      </div>

        <div className='w-full md:w-[40%] flex flex-col gap-4 '>
        <Atropos>
          <ExperienceRow
          image={'./zeqoon.png'}
          title={'Zeqon Enterprises'}
          post={"Web Developer"}
          desc={'Developing College and Universities websites'}
          skill={["HTML, ", "CSS, ", "Bootstrap"]}
          fDate={"April '22"}
          tDate={"July '22"} />
        </Atropos>
        
        <Atropos>
          <ExperienceRow
          image={'./stpi.png'}
          title={'STPI'}
          post={"Software Developer"}
          desc={'Worked on the development of a browser and mobile based application using React and React Native for E-Governance projects'}
          skill={["ReactJs, ", "React Native, ", "Tailwind CSS, ", "Redux"]}
          fDate={"Aug '22"}
          tDate={"till"}
        />
        </Atropos>
        </div>

      </div>

    </>
  )
}

export default Experience