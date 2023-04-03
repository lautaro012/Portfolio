import Reacticon from '../../Icons/React.png'
import Typescripticon from '../../Icons/Typescript.png'
import TailwindIcon from '../../Icons/Tailwind.png'
import './Footer.css'

export default function Footer () {


    return (
        <footer className='flex flex-col items-center'>
            <hr></hr>
            <div className='flex flex-row sm:w-1/2 justify-around m-4 '>
                <img className='footer-img' alt='alt' width={25}  src={Reacticon}></img>
                <br className='p-4'></br>
                <img className='footer-img' width={25} alt='alt'  src={Typescripticon}></img>
                <br className='p-4'></br>
                <img width={25} className='footer-img' alt='alt' src={TailwindIcon}></img>
                <br className='p-4'></br>
            </div>
            <span className='mb-4 text-sm'> © 2023 LauRob, Inc. All rights reserved.</span>
        </footer>
    )
}