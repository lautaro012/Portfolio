import Reacticon from '../../Icons/React.png'
import Typescripticon from '../../Icons/Typescript.png'
import TailwindIcon from '../../Icons/Tailwind.png'

export default function Footer () {


    return (
        <footer className='flex flex-col align-center'>
            <hr></hr>
            <div className='flex flex-row justify-center m-4'>
                <img width={30}  src={Reacticon}></img>
                <br className='p-4'></br>
                <img width={30}  src={Typescripticon}></img>
                <br className='p-4'></br>
                <img width={30}  src={TailwindIcon}></img>
                <br className='p-4'></br>
            </div>
            <span className='mb-4'> © 2023 LauRob, Inc. All rights reserved.</span>
        </footer>
    )
}