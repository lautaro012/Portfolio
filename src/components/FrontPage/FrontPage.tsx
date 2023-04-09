// import Typed from 'react-typed'
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import './Frontpage.css'
import photo from '../../Images/home-main.svg'
import curricuCV from '../../Images/Robles Lautaro CV.pdf'


export default function Frontpage ({dataLanguage}:any) {


    const [language, setLanguage] = useState(localStorage.getItem('language'))
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    let lang = localStorage.getItem('language')
    let Data = dataLanguage

    const handleCV = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            setSuccess(true)
        }, 2000)
    }

    return (
        <div>
            <div className='string-conteiner h-screen flex flex-col lg:flex-row justify-center pt-20'>
                <div className="flex flex-col justify-center">
                    <h1 className="NAME lg:mt-12">  ROBLES LAUTARO </h1>
                <h2 className="lg:h-20 lg:text-black dark:text-white h-20">
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
                <span className="">
                    {
                        lang === 'en' ?
                        dataLanguage.en.frontpage.span
                        :
                        dataLanguage.es.frontpage.span
                    }
                </span>

                <div className="flex justify-center align-center pt-20">
                    <a href={curricuCV} target="_blank" 
                    rel="noreferrer">
                        <button 
                        className={
                            loading ? 'boton loading' : success ? 'boton success' : 'boton'} 
                        onClick={handleCV}>  
                        {
                            !loading && !success ?
                                <span className="text-white">
                                    {
                                        lang === 'en' ?
                                        dataLanguage.en.frontpage.cv
                                        :
                                        dataLanguage.es.frontpage.cv
                                    }
                                </span>
                            :
                            null
                        }
                            {
                                loading || success ?
                                <i className="fa"></i>
                                :
                                null  
                            }
                        </button>
                    </a>

                </div>
                {/*
                <button className="success pt-12">
                    lang === 'en' ?
                    dataLanguage.en.frontpage.cv
                    :
                    dataLanguage.es.frontpage.cv
                </button>
                */}
                </div>
    
            <img width={500} className='w-0 lg:w-auto' src={photo} alt='asdfsadfdsaf'></img>
                
            </div>
        </div>
    )
}