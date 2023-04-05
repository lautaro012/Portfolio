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
import FigmaIcon from '../../Icons/Figma.png'
import SequelizeIcon from '../../Icons/Sequelize.png'
import TailwindIcon from '../../Icons/Tailwind.png'
import {  Fade } from "react-awesome-reveal";
import BootstrapIcon from '../../Icons/Bootstrap.png'
import ReactnativeIcon from '../../Icons/react-native.png'
import NextJSIcon from '../../Icons/nextjs.svg'
import DjangoIcon from '../../Icons/django.svg'
import './Technologies.css'


import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      partialVisibilityGutter: 0.1,
      items: 3
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 2,
      partialVisibilityGutter:0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
            <h2 className='p-12 flex justify-center'> {language === 'en' ? datalang.datalang.en.technologies.title : datalang.datalang.es.technologies.title} </h2>
            <div className='md:flex sm:block md:m-8'>

                <div className='sm:m-4 md:w-5/12'>
                    <h3 className='p-8 flex justify-center'> Front-end </h3>

                    
                    <Carousel
                    partialVisibile={true}
                    ssr={true}
                    infinite={false}
                    transitionDuration={500}
                    autoPlaySpeed={1700}
                    responsive={responsive}
                    slidesToSlide={1}                                                                                                                       
                    arrows={false}
                    rewind={true}
                    autoPlay={true}
                    className='Carouseltest'
                    >
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200  m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={Typescripticon} alt='ts'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Typescript </span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={JsIcon} alt='js'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>Javascript</span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={HTMLIcon} alt='html'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> HTML </span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={Cssicon} alt='css'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> CSS </span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={TailwindIcon} alt='twcss'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Tailwind </span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={BootstrapIcon} alt='btscss'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Bootstrap </span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55}  className='h-2/4' src={Reacticon} alt='react'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> ReactJS </span>
                        </div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55}  className='h-2/4' src={Reduxicon} alt='redux'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> ReduxJS </span>
                        </div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={FigmaIcon} alt='figma'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'> Figma </span>
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
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={NodeIcon} alt='Node'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>NodeJS</span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img  width={55} className='h-2/4' src={MongoIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>MongoDB</span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img  width={55} className='h-2/4' src={PostgressIcon} alt='PostgreSQL'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>PostgreSQL</span></div>
                        <div className='flex justify-center divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                            <img width={55} className='h-2/4' src={SequelizeIcon} alt='sql'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>Sequelize</span></div>
                    </Carousel>
                </div>
            </div>
            <div className='md:flex md:flex-col items-center'>
                <h3 className='p-8'> {language === 'en' ? datalang.datalang.en.technologies.learning : datalang.datalang.es.technologies.learning} </h3>
                <div className='flex flex-col md:flex-row items-center'>
                    <Fade  cascade duration={3000} damping={1}>
                        <div className='flex justify-center lg:m-4 w-32 md:w-32 divcard dark:bg-gray-700 dark:text-gray-200 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4'>
                            <img width={55} className='h-2/4' src={NextJSIcon} alt='Node'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>NextJS</span>
                        </div>
                    </Fade>
                   <Fade cascade duration={3000} damping={1}>
                        <div className='flex justify-center lg:m-4 divcard dark:bg-gray-700 dark:text-gray-200 w-32 md:w-32 flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4'>
                            <img  width={55} className='h-2/4' src={DjangoIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4'>Django</span>
                        </div>
                   </Fade>
                   <Fade cascade duration={3000} damping={1}>
                        <div className='flex justify-center lg:m-4 divcard dark:bg-gray-700 dark:text-gray-200 flex-col w-32 md:w-32 items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4'>
                            <img  width={55} className='h-2/4' src={ReactnativeIcon} alt='Mongo'></img>
                            <span className='h-2'></span>
                            <span className='h-1/4 text-sm' >React Native</span>
                        </div>
                   </Fade>
                </div>

            </div>
        </div>
    )
}