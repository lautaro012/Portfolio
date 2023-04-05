import { useState } from 'react'
import './Contact.css'
import Form from './Form.jsx'
import imgcontact from '../../Images/avatar.svg'


export default function Contact (datalang:any) {

    let language = localStorage.getItem('language')

    let data = language === 'en' ? datalang.datalang.en : datalang.datalang.es

    return (
        <div className='lg:flex lg:flex-row '>
            <div className=' m-2 flex flex-col lg:w-1/3'>
                    <img src={imgcontact} className='self-center zindex' width={150} alt='alt'></img>
                <div className='pt-24 relative pb-4 pl-4 pr-4 bg-gray-100 dark:bg-gray-500 fiximage '>
                    <span> {data.contact.findme}  </span>
                    <div className='flex flex-row justify-center'>
                        <div className='m-4'>
                            <div className='button twitter'>
                                <i className="fab fa-linkedin fa-2x"></i>
                            </div>
                        </div>
                        <div className='m-4'>
                            <div className='button github'>
                                <i className="fab fa-github fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center '>
                        <div className='button facebook mr-12'>
                            <i className="fa fa-phone fa-2x"></i>
                        </div>

                        <span className=" self-center text-md font-semibold whitespace-nowrap dark:text-white">
                            +54 2804-655549
                        </span>
                    </div>
                    <div className='flex flex-row justify-evenly'>
                        <div className='button instagram mr-8'>
                            <i className="fab fa-google fa-2x"></i>
                        </div>

                        <span className="self-center text-xs font-semibold whitespace-nowrap dark:text-white">
                            Lautaro0121@gmail.com
                        </span>
                    </div>
                </div>
            </div>


            <div className='m-4 lg:w-1/2'>
                <h2 className='mt-8 mb-8'>{data.contact.letswork}</h2>
               <Form datalang={data.contact.form}></Form>
            </div>
            {/*
            <div className='buttons-container'>
            <div className='button codepen'>
                <i className="fab fa-codepen fa-2x"></i>
            </div>
            <div className='button reddit'>
                <i className="fab fa-reddit fa-2x"></i>
            </div>
            </div>
            */}
            <hr></hr>
        </div>
    )
}