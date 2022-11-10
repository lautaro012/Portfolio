import { Carousel } from "react-responsive-carousel";
import Reacticon from '../../Icons/React.png'
import Cssicon from '../../Icons/Css.png'
import JsIcon from '../../Icons/Javascript.png'
import MongoIcon from '../../Icons/Mongo.png'
import NodeIcon from '../../Icons/Nodejs.png'
import PostgressIcon from '../../Icons/Postgress.png'
import Reduxicon from '../../Icons/Redux.png'
import Typescripticon from '../../Icons/Typescript.png'

export default function Techno () {

    return (
        <div className=" bg-gray-400">
            <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            infiniteLoop={true}
            width={50}
            dynamicHeight={true}
            >
                <div>
                    <img width={50} src={Reacticon} alt='react'></img>
                </div>
                <div>
                    <img width={50} src={Cssicon} alt='css'></img>
                </div>
                <div>
                    <img width={50} src={Reduxicon} alt='css'></img>
                </div>
                <div>
                    <img width={50} src={Typescripticon} alt='css'></img>
                </div>
            </Carousel>
            <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            infiniteLoop={true}
            dynamicHeight={true}
            width={50}
            >
                <div>
                    <img width={50} src={JsIcon} alt='JS'></img>
                </div>
                <div>
                    <img width={50} src={NodeIcon} alt='node'></img>
                </div>
                <div>
                    <img width={50} src={Typescripticon}></img>
                </div>
            </Carousel>
            <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            infiniteLoop={true}
            dynamicHeight={true}
            width={50}
            >
                <div>
                    <img width={50} src={MongoIcon} alt='mongo'></img>
                </div>
                <div>
                    <img width={50} src={PostgressIcon} alt='PostgreSQL'></img>
                </div>
            </Carousel>
        </div>
    )
}