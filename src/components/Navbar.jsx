import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [hovered, sethovered] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stifness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                type: "spring",
                stifness: 20,
                damping: 15
            }
        }
    }



    return (
        <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
            <div className="max-w-[1400px] mx-auto  flex justify-between text-gray-600 text-xl items-center h-20">
                <a href="#">Neil Patrick</a>




                <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                    {["about", "portfolio", "contact"].map((item) => (
                        <li key={item}>
                            <motion.div className="flex flex-col" whileHover="hover">
                                <Link to={item} smooth={true} offset={0} duration={300}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                                <motion.div
                                    className="border-t-4 border-gray-600 rounded-xl "
                                    initial={{ width: 0 }}
                                    variants={{ hover: { width: "100%" } }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }} // Faster and smoother

                                />
                            </motion.div>
                        </li>
                    ))}
                </ul>
                <div onClick={toggleNav} className="md:hidden z-60 text-gray-600">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div
                    initial={false}
                    animate={nav ? 'open' : 'closed'}
                    variants={menuVariants}
                    className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
                >
                    <div>
                        <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
                            <li><Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                            <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                            <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                </motion.div>
            </div>

        </div>



    )
}

export default Navbar