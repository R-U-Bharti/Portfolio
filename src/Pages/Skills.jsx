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

const Skills = () => {

  let logoList = [
    { id: 1, name: 'React.js', image: reactJs },
    { id: 2, name: 'React Native', image: reactNative },
    { id: 3, name: 'Next.js', image: next },
    { id: 4, name: 'Tailwind CSS', image: tailwind },
    { id: 5, name: 'Bootstrap CSS', image: bootstrap },
    { id: 6, name: 'Docker', image: docker },
    { id: 7, name: 'Git', image: git },
    { id: 8, name: 'Node.js', image: node },
    { id: 9, name: 'Express.js', image: express },
    { id: 10, name: 'HTML 5', image: html },
    { id: 11, name: 'CSS 3', image: css },
    { id: 12, name: 'Javascript', image: js },
    { id: 13, name: 'PostgreSQL', image: pg },
    { id: 14, name: 'MongoDB', image: mongo },
    { id: 15, name: 'Socket.io', image: socket },
    { id: 16, name: 'Redux', image: redux },
  ]

  logoList?.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className='h-max w-screen flex items-start justify-center'>
        <div className="flex flex-wrap gap-10 p-4">
          {logoList?.map((elem, index) => (
            <div className="flex flex-col pl-10 md:pl-0 md:items-center md:justify-end w-full md:w-[calc(100%/8)] gap-2" key={index}>
              <img
                className='md:w-[10vw] w-[80%] border border-gray-200 dark:border-gray-50 h-[7rem] md:h-[5rem] p-2 rounded-md object-contain bg-[#fffffff5] shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
                src={elem.image}
                alt="Logo"
                width={100}
                height={100}
              />
              <div className='md:w-[10vw] w-[80%] text-center font-semibold text-md'>{elem?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
