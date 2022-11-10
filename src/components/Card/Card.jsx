import {Carousel} from 'react-responsive-carousel'
import { useState } from 'react'
import './Card.css'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


export default function Card ({el}) {

   const [open, setOpen] = useState(false)

   const handleClick = () => {
       open ? setOpen(false) : setOpen(true)
   }  
 

    return (
        <div className='conteiner-card'>
                <div className={!open ? "element-card" : "element-card open"}>
                    <div onClick={handleClick} className="front-facing">
                        <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                        dynamicHeight={true}
                        showIndicators={false}
                        showThumbs={false}
                        animationHandler={'fade'}
                        >
                            {
                                el.images.map(img => {
                                    
                                    return (
                                    <div>
                                        <img  onClick={handleClick} className=' image-proyect-hover m-1 p-4 rounded-lg h-content' src={img} alt='asd'></img>
                                    </div>
                                    )    
                            })
                            }
                            <div>
                                <img   className=' image-proyect-hover m-1 p-4 rounded-lg h-content' src={el.images[0]} alt='asd'></img>
                            </div>
                        </Carousel>
                    <span>{el.name}</span>
                    <div className='flex justify-evenly p-4'>
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
                    </div>
                <div onClick={handleClick} className="back-facing">
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold'>{el.title}</span>   
                        {el.description.map(words => {
                        return <span className='text-sm font-medium' >{words}</span>
                        })}
                    </div>

                    <div className='flex pt-4 flex-row w-full justify-around'>
                        <div className='button github'>
                            <i className="fab fa-github fa-2x"></i>
                        </div>
                        <div className='button reddit'>
                            <i class="fa-solid fa-window-maximize fa-2x"></i>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}