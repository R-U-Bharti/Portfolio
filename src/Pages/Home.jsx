import Typewriter from "typewriter-effect";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './Home.css'

function Home() {

    return (
        <div className="flex md:flex-row flex-col-reverse items-center justify-between px-6 md:px-10 md:-mt-6 mt-14">

            <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 w-full">
                <div className="text-4xl md:text-[6vh] font-bold  animate__animated animate__fadeInLeft animate__faster">Welcome To My Portfolio</div>
                <div className="flex md:flex-row flex-col md:items-end h-[12vh] md:h-auto  animate__animated animate__fadeInLeft animate__faster">
                    <div className="text-lg md:text-[3vh] pb-1">I am &nbsp;</div>
                    <div className="text-4xl md:text-[6.5vh] md:pt-2 font-semibold text-neon">
                        <Typewriter
                            options={{
                                strings: ['Kumar R U Bharti', 'a Software Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                    <p className="w-full mt-4">
                        As a passionate, I'm thrilled to announce that I'm open for new and exciting projects. From 🚀 WEB DEVELOPMENT to APP CREATION 🚀, let's collaborate and bring your visions to reality.  💼✨ Drop me a message and let's get started.
                        <br />
                        <br />
                        Connect 🤝 me through below 👇 links 📎
                    </p>
                <div className="flex gap-2 md:gap-4 justify-between md:w-[50%] w-full wrapper">
                    <li onClick={() => window.open('mailto:kumarrubharti.rtcit@gmail.com')} class="icon h-[5.5vh] md:h-[7vh] w-[12.5vw] md:w-[7vw] instagram animate__animated animate__fadeInUp animate__faster border-2 border-red-400 dark:border-red-200 text-red-400 dark:text-red-200 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-1">
                        <span class="tooltip">Mail</span>
                        <span><SiGmail /></span>
                    </li>
                    <li onClick={() => window.open('tel:+918340441298')} class="icon h-[5.5vh] md:h-[7vh] w-[12.5vw] md:w-[7vw] facebook animate__animated animate__fadeInUp animate__fast border-2 border-blue-400 dark:border-blue-200 text-blue-400 dark:text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-2">
                        <span class="tooltip">Phone</span>
                        <span><BsFillTelephoneFill /></span>
                    </li>
                    <li onClick={() => window.open('https://wa.me/918340441298')} class="icon h-[5.5vh] md:h-[7vh] w-[12.5vw] md:w-[7vw] whatsapp animate__faster border-2 border-green-400 dark:border-green-200 text-green-400 dark:text-green-200 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-3">
                        <span class="tooltip">Whatsapp</span>
                        <span><FaWhatsapp /></span>
                    </li>
                    <li onClick={() => window.open('https://www.linkedin.com/in/r-u-bharti-54ab921a3')} className="icon h-[5.5vh] md:h-[7vh] w-[12.5vw] md:w-[7vw] linkedin animate__fadeInUp animate__fast border-2 border-sky-400 dark:border-sky-200 text-sky-400 dark:text-sky-200 hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-4">
                        <span class="tooltip">LinkedIn</span>
                        <span><FaLinkedinIn /></span>
                    </li>

                </div>
            </div>
            <div className="flex items-center justify-center md:w-1/2 w-full relative  animate__animated animate__fadeInRight animate__faster group">
                <img src='./blob.svg' alt="" className="w-[80vw] md:w-[40vw] dark:opacity-100 opacity-70  transition duration-300 ease-in-out transform group-hover:translate-y-4" />
                <img src="./profile.png" alt="" className="w-[60vw] overflow-clip md:w-[28vw] top-[-3vh] transition duration-300 ease-in-out group-hover:scale-105 transform group-hover:-translate-y-4 ml-6 md:top-3 absolute" />
            </div>
        </div>
    );
}

export default Home;