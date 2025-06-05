import {Carousel} from 'react-responsive-carousel'
import { useState } from 'react'
import './Card.css'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Card ({data, el}) {

   const [open, setOpen] = useState(false)

   const handleClick = () => {
       setOpen(!open)
   }  

    return (
        <div className='conteiner-card'>
                <div className={!open ? "element-card" : "element-card open"}>
                    <div onClick={handleClick} className="front-facing flex flex-col justify-center items-center dark:bg-gray-600">
                        
                        <span>{el.name}</span>
                        
                        <Carousel
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        showArrows={false}
                        dynamicHeight={true}
                        showIndicators={false}
                        showThumbs={false}
                        animationHandler={'fade'}
                        swipeable={false}
                        >
                            {
                                el.images.map(img => {
                                    
                                    return (
                                    <div>
                                        <img  onClick={handleClick} className='max-w-20 imageTechnologies image-proyect-hover m-1 p-4 rounded-lg h-content' src={img} alt='asd'></img>
                                    </div>
                                    )    
                            })
                            }
                            <div>
                                <img   className=' image-proyect-hover m-1 p-4 rounded-lg h-content' src={el.images[0]} alt='asd'></img>
                            </div>
                        </Carousel>

                        <span className='text-sm'>{el.title}</span>   

                    <div className='flex justify-evenly p-2'>
                        {
                            el.technologies.map((icon) => {
                                return(
                                    <div key={icon.name} className='cards'>
                                    <figure className="card p-2">
                                        <img src={icon.img} alt='imagen'/>
                                        <figcaption>{icon.name}</figcaption>
                                    </figure>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                           {data.more}
                        </span>
                    </button>  
                    </div>

                    { /*  BACK */}
                <div onClick={handleClick} className="back-facing dark:bg-gray-600">


                    <div className='flex flex-col'>

                        <span className='text-sm font-bold'> Features:</span>   
                        
                        {el.description.map(words => {
                        return <span className='text-xs font-medium' >{words}</span>
                        })}

                        <span className='text-md font-bold pt-4'> Challenge Presented:</span>   

                        <span className='text-xs font-medium'>{el.challenge}</span>

                    </div>


                    <div className='flex pt-4 lg:pt-16 flex-row w-full justify-around'>
                        {
                            el.github === null ? 
                            <></>
                            :
                            <div className='flex flex-col'>
                                <span>Github:</span>
                                <a href={el.github} target="_blank" rel="noreferrer" className='button github'>
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </div>
                        }
                        {
                            el.deploy === null ? 
                            <></>
                            :
                            <div className='flex flex-col'>
                                <span>Visit:</span>
                                <a href={el.deploy} target="_blank" rel="noreferrer" className='button reddit'>
                                    <i className="fa-solid fa-window-maximize fa-2x"></i>
                                </a>
                            </div>
                        }
                    </div>


                </div>
                </div>
        </div>
    )
}