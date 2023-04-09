import Reacticon from '../../Icons/React.png'
import Typescripticon from '../../Icons/Typescript.png'
import TailwindIcon from '../../Icons/Tailwind.png'
import TS from '../../Icons/TS.png'
import newTS from '../../Icons/newTS.svg'
import './Footer.css'

export default function Footer () {


    return (
        <footer className='flex flex-col items-center'>
            <hr></hr>
            <div className='flex flex-row sm:w-1/2 justify-around m-4 '>
                <img className='footer-img grayscale-0 dark:grayscale ' alt='alt' width={25}  src={Reacticon}></img>
                <br className='p-4'></br>
                <img className='footer-img grayscale-0 dark:grayscale ' width={25} alt='alt'  src={newTS}></img>
                <br className='p-4'></br>
                <img width={30} className='footer-img grayscale-0 dark:grayscale ' alt='alt' src={TailwindIcon}></img>
                <br className='p-4'></br>
            </div>
            <span className='mb-4 text-sm dark:text-gray-200'> © 2023 LauRob, Inc. All rights reserved.</span>
        </footer>
    )
}