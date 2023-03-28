import Reacticon from '../../Icons/React.png'
import { Slide, Fade } from "react-awesome-reveal";

{/* const useElementonScreen = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() =>{
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) observer.unobserve(containerRef.current)
        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }

    }, [containerRef, options])
    return [containerRef,isVisible]
}
*/}


export default function Timeline (datalang:any) {

    let language = localStorage.getItem('language')

    {/*const [containerRef, isVisible] = useElementonScreen({
        root:null,
        rootMargin: '0px',
        threshold:1.0
    }) */}


    return (
        <div className="m-8">
            <h2  className='p-12 flex justify-center'> {language === 'en' ? datalang.datalang.en.timeline.title : datalang.datalang.es.timeline.title} </h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ml-6">
                    <Fade cascade duration={3000} damping={1 }>
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 dark:ring-8 ring-grey dark:ring-gray-900 dark:bg-blue-900">
                            <img src={Reacticon} alt='react icon'></img>                
                        </span>
                    </Fade>

                    <Slide duration={1000} direction='right'>
                         
                            <h3  className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.technical.name : datalang.datalang.es.timeline.technical.name}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.technical.from : datalang.datalang.es.timeline.technical.from} </time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.technical.description : datalang.datalang.es.timeline.technical.description}</p>
                            
                    </Slide>
                {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
            </li>
            <li className="mb-10 ml-6">
                    <Fade cascade duration={3000} damping={1}>
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 dark:ring-8 ring-grey dark:ring-gray-900 dark:bg-blue-900">
                            <img src={Reacticon} alt='react icon'></img>                
                        </span>
                    </Fade>

                    <Slide duration={1000} direction='right'>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.computerprogramming.name : datalang.datalang.es.timeline.computerprogramming.name}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">{language === 'en' ? datalang.datalang.en.timeline.computerprogramming.from : datalang.datalang.es.timeline.computerprogramming.from} </time>
                        <p className="text-base font-normal text-gray-500 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.computerprogramming.description : datalang.datalang.es.timeline.computerprogramming.description}  </p>
                    </Slide>
            </li>
            <li className="ml-6"> 
                <Fade cascade duration={3000} damping={1}>
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 dark:ring-8 ring-grey dark:ring-gray-900 dark:bg-blue-900">
                        <img src={Reacticon} alt='react icon'></img>                
                    </span>
                </Fade>
                <Slide duration={1000} direction='right'>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{language === 'en' ? datalang.datalang.en.timeline.henry.name : datalang.datalang.es.timeline.henry.name} <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.computerprogramming.from : datalang.datalang.es.timeline.computerprogramming.from} </time>
                    <p className="text-base font-normal text-gray-500 dark:text-white"> {language === 'en' ? datalang.datalang.en.timeline.computerprogramming.description : datalang.datalang.es.timeline.computerprogramming.description} </p>
                </Slide>
            </li>
        </ol>
        </div>
    )
}