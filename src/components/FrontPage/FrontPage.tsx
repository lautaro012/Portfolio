// import Typed from 'react-typed'
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import './Frontpage.css'



export default function Frontpage (datalang:any) {

    let language = localStorage.getItem('language')

    return (
        <div>
            <div className='string-conteiner h-screen flex flex-col justify-center'>
                <div className="flex flex-col h-1/2 justify-around">
                    <h1 className="NAME">  ROBLES LAUTARO E. </h1  >
                <h2>
                    <Typewriter
                    words=
                        {
                        language === 'en' ?
                            datalang.datalang.en.frontpage.typewriter
                        :
                            datalang.datalang.es.frontpage.typewriter
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
                            datalang.datalang.en.frontpage.span
                        :
                        datalang.datalang.es.frontpage.span
                    }
                </span>
                </div>
            </div>
        </div>
    )
}