// import Typed from 'react-typed'
import React, { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import './Frontpage.css'
import photo from '../../Images/home-main.svg'


export default function Frontpage ({dataLanguage}:any) {


    const [language, setLanguage] = useState(localStorage.getItem('language'))
    let lang = localStorage.getItem('language')
    let Data = dataLanguage
    console.log(Data)
    return (
        <div>
            <div className='string-conteiner h-screen flex flex-col lg:flex-row justify-center lg:pt-16'>
                <div className="flex flex-col justify-center">
                    <h1 className="NAME lg:mb-12">  ROBLES LAUTARO </h1>
                <h2>
                    <Typewriter
                    words=
                        {
                            lang === 'en' ?
                            Data.en.frontpage.typewriter
                        :
                            Data.es.frontpage.typewriter
                        }
                    typeSpeed={50}
                    delaySpeed={1100}
                    deleteSpeed={25}
                    loop
                    />
                </h2>
                <span className="lg:mt-20">
                    {
                        lang === 'en' ?
                        dataLanguage.en.frontpage.span
                        :
                        dataLanguage.es.frontpage.span
                    }
                </span>
                </div>
    
            <img width={500} className='w-0 lg:w-auto' src={photo} alt='asdfsadfdsaf'></img>
                
            </div>
        </div>
    )
}