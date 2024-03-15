import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import 'animate.css'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Education from './Pages/Education'
import Training from './Pages/Training'
import Contact from './Pages/Contact'
import Fade from 'react-reveal/Fade'
import { BiSolidUpArrow } from 'react-icons/bi'
import Heading from './Pages/Heading'
import 'atropos/css'
import Atropos from 'atropos/react';
import { Toaster } from 'react-hot-toast'

function App() {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the top of the page (Y position is 0)
      setIsVisible(window.scrollY > 0);
    };

    // Add the event listener to detect scrolling
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

      <Toaster />

      <div className='relative noto'>


        <div id='home' className='md:h-[100vh] p-4 md:p-8 dark:bg-[#16171d] bg-[#f9f9f9]'>
          <ul class="background dark:bg-[#0a0a0a] bg-gray-100">
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
          </ul>

          <Navbar />
          <Fade bottom >
            <Home />
          </Fade>
        </div>

        <Fade bottom>
          <div id='experience' className='h-full md:h-max bg-transparent backdrop-blur-lg border-t border-b relative'>
            <div className=' p-4 md:p-20 z-50'>
              <Heading title={'Work Experience'} logo={'./experienceLogo.webp'} />
              <Experience />
            </div>
          </div>
        </Fade>

       {/* <Fade bottom>
          <div id='education' className='h-[90vh]'>
            <div className=' p-4 md:p-20 z-50'>
              <Heading title={'Education'} />
              <Education />
            </div>
          </div>
  </Fade> */ }

        {/* <Fade bottom>
          <div id='training' className='h-[90vh]'>
            <Training />
          </div>
        </Fade> */}

        <Fade bottom>
            <div id='skills' className='h-full md:h-max bg-transparent backdrop-blur-lg border-t border-b relative'>
              <div className=' p-4 md:px-20 md:py-10 z-50'>
                <Heading title={'Skills'} logo={'./experienceLogo.webp'} />
                <Skills />
              </div>
          </div>
        </Fade>

        <Fade bottom>
          <div id='Contact' className='h-full md:h-max backdrop-blur-lg border-t border-b relative'>
            <div className=' p-4 z-50'>
              <Heading title={"Lets' Talk"} logo={'./experienceLogo.webp'} />
              <Contact />
            </div>
          </div>
        </Fade>

        {
          isVisible &&
          <div onClick={handleBackToTop} className='bg-neon w-max md:p-4 p-2 hover:animate-bounce md:text-xl text-md rounded-full fixed bottom-4 right-2 md:bottom-2 md:right-2 hover:bg-neonDark hover:shadow-md hover:shadow-neon border border-neonDark hover:border-neonFade transition-all duration-300 cursor-pointer group'>
            <a className='transform group-hover:translate-y-6 text-white '><BiSolidUpArrow /></a>
          </div>}


      </div>
        {/* <div className=' dark:bg-black bg-white text-center dark:text-white text-black text-xs border-t border-red-500 py-1'>
          Design @ R U Bharti
        </div> */}
    </>
  )
}

export default App
