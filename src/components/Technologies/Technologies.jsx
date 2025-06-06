import Reacticon from '../../Icons/React.png'
import Cssicon from '../../Icons/Css.png'
import JsIcon from '../../Icons/Javascript.png'
import MongoIcon from '../../Icons/Mongo.png'
import NodeIcon from '../../Icons/Nodejs.png'
import PostgressIcon from '../../Icons/Postgress.png'
import Reduxicon from '../../Icons/Redux.png'
import Typescripticon from '../../Icons/Typescript.png'
import Carousel from "react-multi-carousel";
import HTMLIcon from '../../Icons/HTML.png'
import KotlinIcon from '../../Icons/Kotlin.png'
import NestJSIcon from '../../Icons/NestJS.png'
import SequelizeIcon from '../../Icons/Sequelize.png'
import TailwindIcon from '../../Icons/Tailwind.png'
import ReactnativeIcon from '../../Icons/react-native.png'
import NextJSIcon from '../../Icons/nextjs.svg'
import DjangoIcon from '../../Icons/django.svg'
import AWSIcon from '../../Icons/aws.png'
import DockerIcon from '../../Icons/docker.png'
import CSharpIcon from '../../Icons/Csharp.png'
import {  Fade } from "react-awesome-reveal";
import './Technologies.css'


import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      partialVisibilityGutter: 0.1,
      items: 3
    },
    desktop: {
      breakpoint: { max: 1499, min: 731 },
      items: 2,
      partialVisibilityGutter:0.1
    },
    tablet: {
      breakpoint: { max: 730, min: 464 },
      items: 3,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter:0
    }
  };


export default function Techno (datalang) {

    let language = localStorage.getItem('language')

  

    return (
        <div className="w-full">
            <h2  className='text-[#bf4d28] m-12 dark:text-white flex justify-center'> {language === 'en' ? datalang.datalang.en.technologies.title : datalang.datalang.es.technologies.title} </h2>
            <div id='technologies' className='md:flex sm:block md:m-8 justify-around'>

                <div className='sm:m-4 md:w-5/12'>
                    <h3  className='p-8 flex justify-center'> Front-end </h3>
 
                    <Carousel
                        partialVisibile={true}
                        ssr={true}
                        infinite={true}
                        transitionDuration={500}
                        autoPlaySpeed={1700}
                        responsive={responsive}
                        slidesToSlide={1}                                                                                                                       
                        arrows={false}
                        rewind={true}
                        autoPlay={true}
                        className='Carouseltest'
                    >
                        <div className='flex justify-center  divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]  dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200   w-32 h-32'>
                            <img  width={55} className='' src={Typescripticon} alt='ts'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Typescript </span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55} className='' src={JsIcon} alt='js'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>Javascript</span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55} className='' src={HTMLIcon} alt='html'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> HTML </span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55} className='' src={Cssicon} alt='css'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> CSS </span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55} className='' src={TailwindIcon} alt='twcss'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Tailwind </span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={45} className='' src={ReactnativeIcon} alt='btscss'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> React Native </span>
                        </div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55}  className='' src={Reacticon} alt='react'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> ReactJS </span>
                        </div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55}  className='' src={Reduxicon} alt='redux'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> ReduxJS </span>
                        </div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  w-32 h-32'>
                            <img width={55} className='' src={KotlinIcon} alt='figma'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Kotlin </span>
                        </div>
                    </Carousel>

                </div>
                <div className='md:min-w-12'>

                </div>
                <div className='sm:m-4 md:w-5/12' >
                    <h3 className='p-8'> Back-end </h3>
                    <Carousel 
                        infinite={true}
                        ssr={true}
                        autoPlaySpeed={1700}
                        responsive={responsive}
                        partialVisible={true}
                        slidesToSlide={1}                                                                                                                       
                        transitionDuration={500}
                        arrows={false}
                        rewind={true}
                        autoPlay={true}
                        className='Carouseltest'
                    >
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='' src={NodeIcon} alt='Node'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>NodeJS</span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img  width={55} className='' src={MongoIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>MongoDB</span>
                        </div>                        
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img  width={55} className='' src={NestJSIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>NestJS</span>
                        </div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img  width={55} className='' src={PostgressIcon} alt='PostgreSQL'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>PostgreSQL</span></div>
                        <div className='flex justify-center divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='' src={SequelizeIcon} alt='sql'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>Sequelize</span></div>
                    </Carousel>
                </div>
            </div>
            <div className='md:flex md:flex-col items-center'>
                <h3 className='p-8'> {language === 'en' ? datalang.datalang.en.technologies.learning : datalang.datalang.es.technologies.learning} </h3>
                <div className='flex flex-col md:flex-row items-center'>
                    <Fade  cascade duration={3000} damping={1}>
                        <div className='flex justify-center lg:m-4 w-32 md:w-32 divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4'>
                            <img width={55} className='' src={DockerIcon} alt='Node'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>Docker</span>
                        </div>
                    </Fade>
                   <Fade cascade duration={3000} damping={1}>
                        <div className='flex justify-center lg:m-4 divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 w-32 md:w-32 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4'>
                            <img  width={55} className='' src={CSharpIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>C#</span>
                        </div>
                   </Fade>
                   <Fade cascade duration={3000} damping={1}>
                        <div className='flex mw-32 justify-center lg:m-4 divcard dark:shadow-[0_35px_60px_-15px_rgba(255, 254, 254, 0.5)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:text-gray-200 w-32 md:w-32 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4'>
                            <img  width={55} className='' src={AWSIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>AWS</span>
                        </div>
                   </Fade>
                </div>

            </div>
        </div>
    )
}