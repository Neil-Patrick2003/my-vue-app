import React from 'react'
import { delay, motion } from 'framer-motion'
import ShinyEffect from './ShinyEffect'
import { TypeAnimation } from "react-type-animation"
import profilepic from "../assets/profpic.png";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
// import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import {
    DiCss3,
    DiHtml5,
    DiReact,
    DiPhp,
    DiLaravel,
    DiJava,
    DiMysql

} from "react-icons/di";
export const Hero = () => {
    return (
        <div className='mt-20 max-w-[1400px] mx-auto relative'>
            <div className='grid md:grid-cols-2  p-4 md:p-0   gap-8'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}

                >
                    <TypeAnimation
                        sequence={[
                            "BSIT Student",
                            1000,
                            "Bigginer",
                            1000,
                            "Web Dev",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-600 text-xl md:text-6xl "
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center text-gray-200 text-2xl md:text-6xl tracking-tight md:my-4"
                    >
                        <span className="pr-4">HEY, I AM</span>
                        <span >

                        </span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center font-bold text-purple-500 text-2xl md:text-5xl tracking-tight md:my-4"
                    >
                        NEIL PATRICK
                        B. MULINGBAYAN
                    </motion.p>



                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-sm mb-6"
                    >
                        I am a passionate fullstack developer with over 5 years of experience.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='flex flex-row items-center gap-6 my-4 md:mb-0'
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-4 py-[1.5px] md:p-4  border border-purple-400 rounded-xl"
                        >
                            Download CV
                        </motion.button>
                        <div className='flex gap-6 flex-row text-3xl md:text-6xl text-3xl text-purple-400 z-20'>
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineGithub />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineLinkedin />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineInstagram />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                <div className='flex justify-center'>
                    <motion.img
                        src={profilepic}
                        className=" w-[300px] md:w-[450px] "
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
            >

                <p className='text-gray-200 pt-3 text-2xl'>My Tech Stack</p>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiHtml5 className='text-orange-500 text-6xl cursor-pointer' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiCss3 className='text-blue-500 text-6xl cursor-pointer' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiPhp className='text-purple-500 text-6xl cursor-pointer' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiLaravel className='text-red-500 text-6xl cursor-pointer' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiMysql className='text-blue-200 text-6xl cursor-pointer' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiJava className='text-purple-400 text-6xl cursor-pointer' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <DiReact className='text-blue-400 text-6xl cursor-pointer' />
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400}/>
            </div>
        </div>
    )
}


export default Hero