import { useState } from 'react'
import './Card.css'
import Carrusel from '../carousel/carousel'



export default function Card ({el}) {

   const [open, setOpen] = useState(false)

   const handleClick = () => {
       open ? setOpen(false) : setOpen(true)
   }  


    return (
        <div className='conteiner-card'>
                <div onClick={handleClick} className={!open ? "element-card" : "element-card open"}>
                    <div className="front-facing">
                    <img onClick={handleClick} className=' image-proyect-hover m-1 p-4 rounded-lg h-content' src={el.images[0]} alt='asd'></img>
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
                <div className="back-facing">
                    <p>Copper is a chemical element with symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity.</p>
                </div>
                </div>
        </div>
    )
}