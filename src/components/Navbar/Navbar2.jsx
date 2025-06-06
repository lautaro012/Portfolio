import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll'
import "./Navbar.css";
import curricuCV from '../../Images/Robles-Lautaro CV.pdf'



export default function Navbar2 ({datalang, rendertest}){
    
    
    const [language, setLanguage] = useState(localStorage.getItem('language') !== null ? localStorage.getItem('language') : 'en')
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    let data = language === 'en' ? datalang.en : datalang.es

  
    useEffect(() => {
    
    },[language])


    const confirmToggle = () => {
      localStorage.theme = "dark" ? handleTheme : null
    }
    
    const handleOpen = () => {
      openNavbar ? setOpenNavbar(false) : setOpenNavbar(true);
      setOpenLanguage(false);
    };
    const handleLanguage = () => {
      openLanguage ? setOpenLanguage(false) : setOpenLanguage(true);
    };
    const closeNavbar = () => {
        setOpenNavbar(false)
    }
    
  
    const handleTheme = () => {
      document.getElementById("boton_dark")?.classList.toggle("sun")
      if (document.documentElement.classList.toggle('dark')) {
          localStorage.theme = "dark"
      }
      else {
          localStorage.theme = "light"
      }
    }

    const Changelanguage = (e, name) => {
        e.preventDefault()
        localStorage.setItem('language', name)
        setLanguage(name)
        rendertest(name)
    }
  
    confirmToggle()

    
    return (
        <nav className="bg-white top-0 w-full duration-500 fixed z-10 border-gray-200 px-4 py-2.5 dark:bg-gray-900 dark:border-b-gray-700 estilosborde">
            <div className=" flex flex-wrap items-center justify-around mx-auto">
                <div className="flex fixed right-4 bottom-10 items-center md:order-2">
                    <label className="toggle">
                        <input onClick={handleTheme} type="checkbox"  className="toggle__input sr-only"/>
                        <span className="toggle__item"></span>
                    </label>
                </div>
                <div className="flex">
                        <img src="https://servicio.us.es/empleovirtualus/wp-content/uploads/2015/12/02.png" width={32} className="h-6 mr-0 sm:h-9 sm:w-auto" alt="Flowbite Logo" />

                        <a href={curricuCV} target="_blank" rel="noreferrer" className="self-center text-base font-semibold whitespace-nowrap hover:border-b">Robles Lautaro</a>

                </div>
                <div className="flex items-center md:order-2">
                    <button type="button" onClick={handleLanguage} data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center px-2 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        {
                        language === 'en' ?
                        'English (US)'
                        :
                        'Español (ES)'
                        }
                    </button>
                    <div className= {
                        openLanguage ?
                        "z-50 fixed top-0 mt-14 bg-slate-200 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                        :
                        "z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" 
                    }
                    id="language-dropdown-menu"
                    >
                        <ul className="py-2" role="none">
                            <li>
                                <button onClick={(e) => Changelanguage(e,'en')}>
                                    <div href="#" onClick={handleLanguage} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                                            English(US)
                                        </div>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => Changelanguage(e,'es')}>
                                    <a
                                    href="http://localhost:3000/"
                                    onClick={handleLanguage}
                                    className="block py-2 px-4 text-sm text-gray-700 hover/:bg-gray-100 dark:text-gray-400 dark:hover/:bg-gray-600 dark:hover/:text-white"
                                    role="menuitem"
                                    >
                                    <div className="inline-flex items-center">
                                        <svg
                                        className="h-4 w-4 rounded-full mr-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="flag-icon-css-de"
                                        viewBox="0 0 512 512"
                                        >
                                        <path fill="#FF0000" d="M0 341.3h512V512H0z"></path>
                                        <path fill="#FF0000" d="M0 0h512v170.7H0z"></path>
                                        <path fill="#ffff00" d="M0 170.7h512v170.6H0z"></path>
                                        </svg>
                                        Español(ES)
                                    </div>
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-language-select" onClick={handleOpen} type="button" className="inline-flex items-center  ml-1 text-sm text-gray-500 rounded-lg md:hidden hover/:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover/:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={
                    openNavbar ?
                    "items-center justify-between w-full md:flex md:w-auto md:order-1" 
                    :
                    "items-center justify-between hidden w-full md:flex md:w-auto md:order-1" 
                }
                id="mobile-menu-language-select">
                    <ul className="flex duration-500 flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li  className=" text-gray-700 ">
                            <Link
                                activeClass="active"
                                to={'home'}
                                spy={true}
                                smooth={true}
                                key={'home'}
                                duration={1000}
                                offset={-150}
                            >
                                <button onClick={closeNavbar} 
                                className=" w-full block py-2 pl-3 pr-4 rounded hover/:/bg-gray-100 md:hover/:/bg-transparent md:hover/:/text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700"
                                aria-current="page">Home</button>
                            </Link>
                        </li>
                        <li  className=" text-gray-700 ">
                            <Link
                                activeClass="active"
                                to={'technologies'}
                                spy={true}
                                smooth={true}
                                key={'technologies'}
                                duration={1000}
                                offset={-150}
                            >
                                <button href="#" onClick={closeNavbar}
                                className=" w-full block py-2 pl-3 pr-4 rounded hover/:bg-gray-100 md:hover/:bg-transparent md:hover/:text-blue-700 md:p-0 dark:text-gray-400
                                 md:dark:hover/:text-white dark:hover/:bg-gray-700 dark:hover/:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                                {data.navbar.technologies}</button>
                            </Link>
                        </li>
                        <li className=" text-gray-700 ">
                            <Link
                                activeClass="active"
                                to={'about'}
                                spy={true}
                                smooth={true}
                                key={'about'}
                                duration={1000}
                                offset={-150}
                            >
                                <button href="#" onClick={closeNavbar} 
                                className=" w-full block py-2 pl-3 pr-4 rounded hover/:bg-gray-100 md:hover/:bg-transparent md:hover/:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover/:text-white dark:hover/:bg-gray-700 dark:hover/:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                {data.navbar.about}</button>
                            </Link>
                        </li>
                        <li  className=" text-gray-700 ">
                            <Link
                                activeClass="active"
                                to={'projects'}
                                spy={true}
                                smooth={true}
                                key={'projects'}
                                duration={1000}
                                offset={-150}
                            >
                                <button onClick={closeNavbar} className=" w-full block py-2 pl-3 pr-4 rounded hover/:bg-gray-100 md:hover/:bg-transparent md:hover/:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover/:text-white dark:hover/:bg-gray-700 dark:hover/:text-white md:dark:hover:bg-transparent dark:border-gray-700">{data.navbar.projects}</button>
                            </Link>
                        </li>
                        <li  className=" text-gray-700 ">
                            <Link
                                activeClass="active"
                                to={'contact'}
                                spy={true}
                                smooth={true}
                                key={'contact'}
                                duration={1000}
                                offset={-150}
                            >
                                <button onClick={closeNavbar} className=" w-full block py-2 pl-3 pr-4 rounded hover/:bg-gray-100 md:hover/:bg-transparent md:hover/:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{data.navbar.contact}</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}