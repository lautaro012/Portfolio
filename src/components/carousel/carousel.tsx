import {Carousel} from 'flowbite-react'

export default function Carrusel (images:any) {
    return (
        <div className="">
           <Carousel slideInterval={5000}>
               {
                images.images.map((img:any) => {
                    return(
                        <img src={img} alt='........'></img>
                    )
                })
               }
            </Carousel>
        </div>
    )
}