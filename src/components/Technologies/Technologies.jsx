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
import BootstrapIcon from '../../Icons/Bootstrap.png'
import './Technologies.css'


import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


export default function Techno (datalang) {

    let language = localStorage.getItem('language')

  

    return (
        <div className=" w-screen">
            <h2 className='p-12 flex justify-center'> {language === 'en' ? datalang.datalang.en.technologies.title : datalang.datalang.es.technologies.title} </h2>
            <div className='m-4'>
                <h3 className='p-8 flex justify-center'> Front-end </h3>
                <Carousel 
                infinite={false}
                autoPlaySpeed={1000}
                responsive={responsive}
                slidesToSlide={1}                                                                                                                       
                transitionDuration={100}
                centerMode={true}
                arrows={false}
                rewind={true}
                autoPlay={true}
                className='Carouseltest'
                >
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={Typescripticon} alt='ts'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> Typescript </span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={JsIcon} alt='js'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>Javascript</span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={HTMLIcon} alt='html'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> HTML </span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={Cssicon} alt='css'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> CSS </span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={TailwindIcon} alt='twcss'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> Tailwind </span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={BootstrapIcon} alt='btscss'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> Bootstrap </span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55}  className='h-2/4' src={Reacticon} alt='react'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> ReactJS </span>
                    </div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55}  className='h-2/4' src={Reduxicon} alt='redux'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> ReduxJS </span>
                    </div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={FigmaIcon} alt='figma'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'> Figma </span>
                    </div>
                </Carousel>
            </div>
            <div>
                <h3 className='p-8'> Back-end </h3>
                <Carousel 
               infinite={true}
               autoPlaySpeed={2000}
               responsive={responsive}
               slidesToSlide={1}                                                                                                                       
               transitionDuration={100}
               centerMode={true}
               arrows={false}
               rewind={true}
               autoPlay={true}
               className='Carouseltest'
                >
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={NodeIcon} alt='Node'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>NodeJS</span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img  width={55} className='h-2/4' src={MongoIcon} alt='Mongo'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>MongoDB</span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img  width={55} className='h-2/4' src={PostgressIcon} alt='PostgreSQL'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>PostgreSQL</span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={SequelizeIcon} alt='sql'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>Sequelize</span></div>
                </Carousel>
            </div>
            <div>
                <h3 className='p-8'> What im currently learning </h3>
                <div className='flex flex-row'>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={55} className='h-2/4' src={NodeIcon} alt='Node'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>NextJS</span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img  width={55} className='h-2/4' src={MongoIcon} alt='Mongo'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>Django</span></div>
                    <div className='flex justify-center divcard flex-col items-center border-double border-gray-400 m-2 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img  width={55} className='h-2/4' src={MongoIcon} alt='Mongo'></img>
                        <span className='h-2'></span>
                        <span className='h-1/4'>React Native</span></div>
                </div>

            </div>
        </div>
    )
}