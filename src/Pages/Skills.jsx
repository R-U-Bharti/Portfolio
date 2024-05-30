import reactJs from '../assets/logo/React JS.png'
import bootstrap from '../assets/logo/Bootstrap CSS.png'
import css from '../assets/logo/CSS 3.png'
import docker from '../assets/logo/Docker.png'
import express from '../assets/logo/Express JS.png'
import git from '../assets/logo/Git.png'
import html from '../assets/logo/HTML 5.png'
import js from '../assets/logo/Javascript.png'
import mongo from '../assets/logo/Mongo DB.png'
import next from '../assets/logo/Next JS.png'
import node from '../assets/logo/Node JS.png'
import pg from '../assets/logo/PostgreSQL.png'
import reactNative from '../assets/logo/React Native.png'
import redux from '../assets/logo/Redux.png'
import socket from '../assets/logo/Socket IO.png'
import tailwind from '../assets/logo/Taiwind CSS.png'
import skillBackground from '../assets/skillBackground.webp'
import './Skills.css'
import { useState } from 'react'

const Skills = () => {

  const [toggle, setToggle] = useState(true)

  let logoList = [
    { id: 1, name: 'React.js', image: reactJs, position: 'top-[0%] left-[40%]' },
    { id: 2, name: 'React Native', image: reactNative, position: 'top-[0%] left-[40%]' },
    { id: 3, name: 'Next.js', image: next, position: 'top-[0%] left-[40%]' },
    { id: 4, name: 'Tailwind CSS', image: tailwind, position: 'top-[0%] left-[40%]' },
    { id: 5, name: 'Bootstrap CSS', image: bootstrap, position: 'top-[0%] left-[40%]' },
    { id: 6, name: 'Docker', image: docker, position: 'top-[0%] left-[40%]' },
    { id: 7, name: 'Git', image: git, position: 'top-[0%] left-[40%]' },
    { id: 8, name: 'Node.js', image: node, position: 'top-[0%] left-[40%]' },
    { id: 9, name: 'Express.js', image: express, position: 'top-[0%] left-[40%]' },
    { id: 10, name: 'HTML 5', image: html, position: 'top-[0%] left-[40%]' },
    { id: 11, name: 'CSS 3', image: css, position: 'top-[0%] left-[40%]' },
    { id: 12, name: 'Javascript', image: js, position: 'top-[0%] left-[40%]' },
    { id: 13, name: 'PostgreSQL', image: pg, position: 'top-[0%] left-[40%]' },
    { id: 14, name: 'MongoDB', image: mongo, position: 'top-[0%] left-[40%]' },
    { id: 15, name: 'Socket.io', image: socket, position: 'top-[0%] left-[40%]' },
    { id: 16, name: 'Redux', image: redux, position: 'top-[0%] left-[40%]' },
  ]

  logoList?.sort((a, b) => a.id - b.id);

  const skillCard = 'absolute text-xs text-center px-4 py-1 text-white'

  return (
    <div className='md:h-[70vh] w-screen md:pt-[19.5rem] md:pb-0 pb-10'>
      <div className='md:h-[70vh] relative w-screen flex md:items-end justify-center'>
      
        <div className="md:hidden flex flex-wrap justify-center gap-10 -mt-16 ">
          {logoList?.map((elem, index) => (
            <div className="flex flex-col pl-16 md:pl-0 md:items-center md:justify-end w-full md:w-[calc(100%/8)] gap-2" key={index}>
              <img
                className='md:w-[10vw] w-[80%] border border-gray-300 dark:border-gray-500 h-[7rem] md:h-[5rem] p-4 rounded-md object-contain bg-[#ffffff73] dark:bg-[#51505082] shadow-[0px_0px_10px_rgba(255,255,255,0.3)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
                src={elem.image}
                alt="Logo"
                width={100}
                height={100}
              />
              <div className='md:w-[10vw] w-[80%] text-center font-semibold text-md'>{elem?.name}</div>
            </div>
          ))}
        </div>
      
        <div className={`${toggle ? 'skillList1' : ''} md:block hidden rotation1 absolute w-[70vw] h-[70vw] bottom-[-14vw] transition-all duration-300 ease-in-out rounded-full border border-gray-50 dark:border-gray-100`}>
          {logoList?.map((elem, index) => (
            <div className={`${skillCard} skill_card ${index > 7 ? `skill_card${elem?.id}bottom` : `skill_card${elem?.id}top`} flex flex-col pl-10 md:pl-0 md:items-center md:justify-end w-full md:w-[calc(100%/10)] gap-2`} key={index}>
              <img
                className='md:w-[4vw] w-[80%] border border-gray-300 dark:border-gray-500 h-[7rem] rounded-full md:h-[4vw] p-4 object-contain bg-[#fffffff0] dark:bg-[#51505082]  shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
                src={elem.image}
                alt="Logo"
                width={100}
                height={100}
              />
              <div className='md:w-[10vw] w-[80%] text-center font-semibold text-md dark:text-gray-50 text-gray-800'>{elem?.name}</div>
            </div>
          ))}
        </div>

        <div className={`${toggle ? 'skillList2' : ''} md:block hidden absolute rotation2  w-[55vw] h-[55vw] bottom-[-7vw] transition-all duration-300 ease-in-out rounded-full border border-gray-50 dark:border-gray-100`}>
          {logoList?.map((elem, index) => (
            <div className={`${skillCard} skill_card ${index < 8 ? `skill_card${elem?.id}bottom` : `skill_card${elem?.id}top`} flex flex-col pl-10 md:pl-0 md:items-center md:justify-end w-full md:w-[calc(100%/10)] gap-2`} key={index}>
              <img
                className='md:w-[4vw] w-[80%] border border-gray-300 dark:border-gray-500 h-[7rem] rounded-full md:h-[4vw] p-4 object-contain bg-[#fffffff0] dark:bg-[#51505082]  shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
                src={elem.image}
                alt="Logo"
                width={100}
                height={100}
              />
              <div className='md:w-[10vw] w-[80%] text-center font-semibold text-md dark:text-gray-50 text-gray-800'>{elem?.name}</div>
            </div>
          ))}
        </div>

        <div className="w-[40vw] h-[40vw] md:block hidden absolute bottom-0 border rounded-full">
          <img  draggable="false"onMouseEnter={() => setToggle(false)} onMouseLeave={() => setToggle(true)} src={skillBackground} className='w-[40vw] h-[20vw] overflow-clip transition-all duration-300 ease-in-out transform z-10 border-t-2 border-l-2 border-r-2 border-[#ffffff4d] rounded-t-full' alt="" srcset="" />
        </div>

      </div>
    </div>
  );
};

export default Skills;
