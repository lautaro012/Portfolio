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
      items: 3
    }
  };

export default function Techno () {

    return (
        <div className=" w-screen h-screen bg-gray-400">
            <div>
                <Carousel 
                infinite={true}
                responsive={responsive}
                >
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} className='w-3/4' src={Typescripticon} alt='ts'></img>
                        <span className='w-1/4'> Typescript </span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} className='w-3/4' src={JsIcon} alt='js'></img>
                        <span className='w-1/4'>Javascript</span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} className='w-3/4' src={HTMLIcon} alt='html'></img>
                        <span className='w-1/4'> HTML </span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} className='w-3/4' src={Cssicon} alt='css'></img>
                        <span className='w-1/4'> CSS </span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} className='w-3/4' src={TailwindIcon} alt='twcss'></img>
                        <span className='w-1/4'> Tailwind </span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} className='w-3/4' src={BootstrapIcon} alt='btscss'></img>
                        <span className='w-1/4'> Bootstrap </span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} classN className='w-1/4'ame='w-3/4' src={Reacticon} alt='react'></img>
                        <span> ReactJS </span>
                    </div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} classN className='w-1/4'ame='w-3/4' src={Reduxicon} alt='redux'></img>
                        <span> ReduxJS </span>
                    </div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'>
                        <img width={50} clas className='w-1/4'sName='w-3/4' src={FigmaIcon} alt='figma'></img>
                        <span> Figma </span>
                    </div>
                </Carousel>
            </div>
            <div>
                <Carousel 
                infinite={true}
                responsive={responsive}
                >
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'><img width={50} className='w-3/4' src={NodeIcon} alt='Node'></img><span>NodeJS</span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'><img  className='w-1/4'width={50} className='w-3/4' src={MongoIcon} alt='Mongo'></img><span>MongoDB</span></div>
                    <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'><img  className='w-1/4'width={50} className='w-3/4' src={PostgressIcon} alt='PostgreSQL'></img><span>PostgreSQL</span></div>
 className='w-1/4'                    className='w-1/4' <div className='flex justify-center flex-col items-center border-double border-gray-400 bg-gray-200 m-4 p-4 w-32 h-32'><img width={50} className='w-3/4' src={SequelizeIcon} alt='sql'></img><span>Sequelize</span></div>
                </Carousel>
            </div>
        </div>
    )
}