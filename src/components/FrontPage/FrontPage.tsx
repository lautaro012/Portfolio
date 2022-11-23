// import Typed from 'react-typed'
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import './Frontpage.css'



export default function Frontpage () {

    return (
        <div>
            <div className='string-conteiner h-screen flex flex-col justify-center'>
                <h4> Hello, I'm </h4>
                <h1 className="NAME">  ROBLES LAUTARO E. </h1>

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
                <br></br>
                <span> Pequeño texto detallando cosas sobre mi  </span>
            </div>
        </div>
    )
}