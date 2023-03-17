import './Contact.css'
import Form from './Form'


export default function Contact () {

    return (
        <div>
            <div className='p-4 m-4 flex flex-col bg-gray-100 dark:bg-gray-500'>
                <span> Find me here: </span>
                <div className='flex flex-row justify-evenly '>
                    <div className='button facebook'>
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </div>
                    <br></br>
                    <span className="pr-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Facebook
                    </span>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <div className='button twitter'>
                        <i className="fab fa-twitter fa-2x"></i>
                    </div>
                    <br></br>
                    <span className="pr-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Twitter
                    </span>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <div className='button github'>
                        <i className="fab fa-github fa-2x"></i>
                    </div>
                    <br></br>
                    <span className="pr-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Github
                    </span>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <div className='button instagram'>
                        <i className="fab fa-instagram fa-2x"></i>
                    </div>
                    <br></br>
                    <span className="pr-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Instagram
                    </span>
                </div>

            </div>


            <div>
                <h1> Let's work together: </h1>
                <Form></Form>
            </div>
            <div className='buttons-container'>
            <div className='button codepen'>
                <i className="fab fa-codepen fa-2x"></i>
            </div>
            <div className='button reddit'>
                <i className="fab fa-reddit fa-2x"></i>
            </div>
            </div>
         
        </div>
    )
}