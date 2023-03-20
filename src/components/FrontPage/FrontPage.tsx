// import Typed from 'react-typed'
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import './Frontpage.css'



export default function Frontpage () {

    return (
        <div>
            <div className='string-conteiner h-screen flex flex-col justify-center'>
                <div className="flex flex-col h-1/2 justify-around">
                    <h1 className="NAME">  ROBLES LAUTARO E. </h1  >
                <h2>
                    <Typewriter
                    words={[
                    "Front End Developer",
                    "Back End Developer",
                    "Technical Engineer"
                    ]}
                    typeSpeed={50}
                    delaySpeed={1100}
                    deleteSpeed={25}
                    loop
                    />
                </h2>
                <br></br>
                <span> 
                    I am a Full Stack Developer with experience in Front-End and Back-End application development. 
                </span>
                </div>
            </div>
        </div>
    )
}