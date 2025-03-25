import { Fade } from "react-awesome-reveal";
import devimg from '../../Images/home-main.png'



export default function Timeline (datalang:any) {

    let language = localStorage.getItem('language')


    return (
        <div className="">
            <h2  className='lg:m-20 m-12 flex dark:text-white justify-center'> {language === 'en' ? datalang.datalang.en.timeline.title : datalang.datalang.es.timeline.title} </h2>
        <div className='lg:flex lg:flex-row'>    
            <ol id='about' className="relative border-l border-gray-200 dark:border-gray-700">                  
            <Fade cascade duration={500} >
                <li className="mb-10 ml-6 md:w-96">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                                <h3  className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.technical.name : datalang.datalang.es.timeline.technical.name}
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.technical.from : datalang.datalang.es.timeline.technical.from} </time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.technical.description : datalang.datalang.es.timeline.technical.description}</p>
                                
                    {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
                </li>
                <li className="mb-10 ml-6 md:w-96">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>

                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.computerprogramming.name : datalang.datalang.es.timeline.computerprogramming.name}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">{language === 'en' ? datalang.datalang.en.timeline.computerprogramming.from : datalang.datalang.es.timeline.computerprogramming.from} </time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.computerprogramming.description : datalang.datalang.es.timeline.computerprogramming.description}  </p>
                </li>
                <li className="mb-10 ml-6 md:w-96"> 
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-200">{language === 'en' ? datalang.datalang.en.timeline.henry.name : datalang.datalang.es.timeline.henry.name} </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.henry.from : datalang.datalang.es.timeline.henry.from} </time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.henry.description : datalang.datalang.es.timeline.henry.description} </p>
                </li>
                <li className="ml-6 md:w-96">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>

                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.blipconnection.name : datalang.datalang.es.timeline.blipconnection.name}
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span>
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">{language === 'en' ? datalang.datalang.en.timeline.blipconnection.from : datalang.datalang.es.timeline.blipconnection.from} </time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-200"> {language === 'en' ? datalang.datalang.en.timeline.blipconnection.description : datalang.datalang.es.timeline.blipconnection.description}  </p>
                </li>
                <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <i className="fas text-xs fa-hourglass-start mx-auto experience-icon dark:text-blue-300 "></i>
                        </span>
                </li>
            </Fade>
            </ol>
            <div>
                <img className='invisible w-0 lg:visible md:ml-10 lg:w-fit' src={devimg} alt='alt'></img>
            </div>
        </div>
        </div>
    )
}