// import Typed from 'react-typed'
import React, { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import './Frontpage.css'



export default function Frontpage ({dataLanguage}:any) {


    const [language, setLanguage] = useState(localStorage.getItem('language'))

    let Data = dataLanguage

    return (
        <div>
            <div className='string-conteiner h-screen flex flex-col justify-center'>
                <div className="flex flex-col h-1/2 justify-around">
                    <h1 className="NAME">  ROBLES LAUTARO </h1>
                <h2>
                    <Typewriter
                    words=
                        {
                        language === 'en' ?
                            Data.frontpage.typewriter
                        :
                            Data.frontpage.typewriter
                        }
                    typeSpeed={50}
                    delaySpeed={1100}
                    deleteSpeed={25}
                    loop
                    />
                </h2>
                <br></br>
                <span>
                    {
                        language === 'en' ?
                        dataLanguage.frontpage.span
                        :
                        dataLanguage.frontpage.span
                    }
                </span>
                </div>
            </div>
        </div>
    )
}