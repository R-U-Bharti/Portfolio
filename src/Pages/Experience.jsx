import React from 'react'
import ExperienceRow from './ExperienceRow'
import Atropos from 'atropos/react';

const Experience = () => {
  return (
    <>

      <div className='flex items-center gap-x-4 gap-y-6 flex-wrap justify-evenly px-6 md:px-0 '>

        {/* <div className='w-full hidden md:flex justify-center items-center md:w-[40%]'>
        <img src="./exp.png" alt="" srcset="" className='image hover:scale-105 drop-shadow-2xl transition-all duration-300 hover:transform hover:scale-x-[0.7] hover:skew-y-3'/>
      </div> */}

        {/* <div className='w-full flex flex-col gap-4 '> */}
        {/* <Atropos> */}
        <ExperienceRow
          image={'./zeqoon.png'}
          title={'Zeqon Enterprises'}
          post={"Web Developer"}
          desc={'Developing College and Universities websites'}
          skill={["HTML, ", "CSS, ", "Bootstrap"]}
          fDate={"April '22"}
          tDate={"July '22"} />
        {/* </Atropos> */}

        {/* <Atropos> */}
        <ExperienceRow
          image={'./aadrika.png'}
          title={'Aadrika Enterprises'}
          post={"Software Developer"}
          desc={'Worked on the development of a browser and mobile based application for E-Governance projects'}
          skill={["ReactJs, ", "React Native, ", "Tailwind CSS, ", "Redux"]}
          fDate={"Aug '22"}
          tDate={"Dec '23"}
        />

        <ExperienceRow
          image={'./gtropy.png'}
          title={'Gtropy (MapmyIndia)'}
          post={"Software Developer"}
          desc={'Working on the development of a browser and mobile based application.'}
          skill={["ReactJs, ", "React Native, ", "Pure CSS, ", "Tailwind CSS, ", "Redux"]}
          fDate={"Jan '24"}
          tDate={"till"}
        />

        {/* </Atropos> */}
        {/* </div> */}

      </div>

    </>
  )
}

export default Experience