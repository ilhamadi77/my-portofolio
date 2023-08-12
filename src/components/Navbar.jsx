import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsPersonLinesFill} from "react-icons/bs"
import logo from "../assets/logo1.png"
import { Link } from 'react-scroll'
 
const Navbar = () => {
    const [nav, setNav] = useState(false);  
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200'  >
        <div>
            <img src={logo} alt="gambar logo" className='w-12' />
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skill
                    </Link></li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
            </ul>

        {/* Hamburger Menu */}
        <div className='md:hidden z-10' onClick={handleClick}>
            {!nav ? <FaBars className='hover:bg-red-800' /> : <FaTimes /> }
        </div>

        {/* Mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl hover:bg-red-500'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-red-500'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-red-500'>
                     <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skill
                    </Link></li>
                <li className='py-6 text-4xl hover:bg-red-500'>
                    <Link onClick={handleClick} to="Work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-red-500'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
             <ul> 
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                   <a className='flex justify-between items-center w-full text-gray-300'
                   href='/'
                   >linkedIn <FaLinkedin  size={30}/> </a> 
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                   <a className='flex justify-between items-center w-full text-gray-300'
                   href='/github'
                   >Github <FaGithub size={30} /></a> 
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' >
                   <a className='flex justify-between items-center w-full text-gray-300'
                   href='/'
                   >Gmail <HiOutlineMail size={30}/></a> 
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
                   <a className='flex justify-between items-center w-full text-gray-300'
                   href='/'
                   >Resume <BsPersonLinesFill size={30} /></a> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar