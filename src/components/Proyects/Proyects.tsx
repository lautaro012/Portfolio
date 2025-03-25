import reactCrush from '../../Images/react crush/game.png';
import reactFinish from '../../Images/react crush/finish.png';
import FrontLight from "../../Images/Restauran/Front Ligth.png"
import Cart from '../../Images/Restauran/Cart.png';
import Contact from '../../Images/Restauran/Contact.png'
import FrontDark from '../../Images/Restauran/Front Dark.png';
import Map from '../../Images/Restauran/Map.png';
import Order from '../../Images/Restauran/Order.png'
import Product from  '../../Images/Restauran/Product.png'
import Games from '../../Images/GameStore/games.png'
import GameDetail from '../../Images/GameStore/game-details.png'
import GameDetail2 from '../../Images/GameStore/details 2.png'
import loading from '../../Images/GameStore/loading.png'
import edit from  '../../Images/Pokedex/edit.png'
import Landingpokedex from '../../Images/Pokedex/Landing.png'
import newpokemon from '../../Images/Pokedex/search and new.png'
import landingcook from '../../Images/Recipes/landing.png'
import createrecipe from  '../../Images/Recipes/create.png'
import detailrecipe from '../../Images/Recipes/detalles.png'
import filterrecipe from '../../Images/Recipes/Home Filtrado.png'
import homerecipe from  '../../Images/Recipes/Home.png'
import Reacticon from '../../Icons/React.png'
import Cssicon from '../../Icons/Css.png'
import JsIcon from '../../Icons/Javascript.png'
import MongoIcon from '../../Icons/Mongo.png'
import NodeIcon from '../../Icons/Nodejs.png'
import PostgressIcon from '../../Icons/Postgress.png'
import Reduxicon from '../../Icons/Redux.png'
import Typescripticon from '../../Icons/Typescript.png'
import reactnativeIcon from '../../Icons/react-native.png'
import kotlinIcon from '../../Icons/Kotlin.png'
import nestjsIcon from '../../Icons/NestJS.png'
import blip1 from '../../Images/blipmobile/blip1.png'
import blip2 from '../../Images/blipmobile/blip2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from "../Card/Card.jsx";
AOS.init();



export interface ProyectProp {
   name:string,
   description:string
}


export default function Proyects (datalang:any) {

    let language = localStorage.getItem('language')
    let data = language === 'en' ? datalang.datalang.en : datalang.datalang.es
    
    const proyects = [
        { 
            name: `${data.projects.resto.name}`,
            title: "The Webpage of your favorite Restaurant:",
            description: data.projects.resto.description,            
            challenge: data.projects.resto.challenge,
            deploy: 'https://e-resto-frontend-seven.vercel.app/',
            github:'https://github.com/lautaro012/E-Resto-Frontend-',
            images: [
                FrontLight,
                Cart,
                Contact,
                FrontDark,
                Map,
                Order,
                Product
            ],
            technologies: [
                {
                    img:Reacticon,
                    name:'React'
                },
                {
                    img:Typescripticon,
                    name:'Typescript'
                }
                ,
                /*
                    img:Cssicon,
                    name:'CSS Modules'
            */
                {
                    img:Reduxicon,
                    name:'Redux'
                }
                ,
                {
                    img:MongoIcon,
                    name:'MongoDB'
                },
                {
                    img:NodeIcon,
                    name:'NodeJS'
                }
            ]
        } ,
        {
            name: `${data.projects.gamestore.name}`,
            title: "E-commerce of Digital Videogames:",
            description: data.projects.gamestore?.description,
            challenge: data.projects.gamestore.challenge,
            deploy: 'https://henry-project.vercel.app/',
            github:'https://github.com/lautaro012/Henry-Project/tree/main/henryproject',
            images: [
                Games,
                GameDetail2,
                GameDetail,
                loading
            ], technologies: [
                {
                    img:Reacticon,
                    name:'React'
                },
                {
                    img:JsIcon,
                    name:'Javascript'
                }
                /*
                    img:Cssicon,
                    name:'CSS Modules'
            */,
                {
                    img:Reduxicon,
                    name:'Redux'
                }
                ,
                {
                    img:NodeIcon,
                    name:'NodeJS'
                }
                ,
                {
                    img:PostgressIcon,
                    name:'Postgresql'
                }
                ,
            ]
        },
        {
            name:`${data.projects.letscook.name}`,
            title:"You don't know what to cook??",
            description : data?.projects.letscook?.description,
            challenge: data.projects.letscook.challenge,
            deploy: 'https://lets-cook-eta.vercel.app/',
            github:'https://github.com/lautaro012/Henry-Food',
            images: [
                landingcook,
                createrecipe,
                detailrecipe,
                filterrecipe,
                homerecipe,
            ],
            technologies: [
                {
                    img:Reacticon,
                    name:'React'
                },
                {
                    img:JsIcon,
                    name:'Javascript'
                },
                {
                    img:Cssicon,
                    name:'CSS Modules'
                },
                {
                    img:NodeIcon,
                    name:'NodeJS'
                },
                {
                    img:PostgressIcon,
                    name:'Postgresql'
                }
            ]
        },
        {
            name: `${data.projects.pokedex.name}`,
            title: "List of Pokemons",
            description: data.projects.pokedex.description,
            challenge: data.projects.pokedex.challenge,
            deploy: 'https://poke-typescript-redux-1dpv.vercel.app/',
            github:'https://github.com/lautaro012/Poke-Typescript-Redux',
            images: [
                Landingpokedex,
                edit,
                newpokemon
            ],
            technologies: [
                {
                    img:Typescripticon,
                    name:'Typescript'
                }
                ,
                {
                    img:Reacticon,
                    name:'React'
                },
                {
                    img:Cssicon,
                    name:'CSS Modules'
                },
                {
                    img:Reduxicon,
                    name:'Redux'
                }
                ,
            ]
        },
        {
            name: `${data.projects.blipmobile.name}`,
            title: "Track your pets",
            description: data.projects.blipmobile.description,
            challenge: data.projects.blipmobile.challenge,
            deploy: 'https://play.google.com/store/apps/details?id=com.blipconnection.blipmobile&hl=es_AR',
            github:null,
            images: [
                blip1,
                blip2
            ],
            technologies: [
                {
                    img:Typescripticon,
                    name:'Typescript'
                }
                ,
                {
                    img:reactnativeIcon,
                    name:'React Native'
                },
                {
                    img:kotlinIcon,
                    name:'Kotlin'
                },
                {
                    img:Cssicon,
                    name:'CSS Modules'
                },
                {
                    img:nestjsIcon,
                    name:'NestJS'
                },
            ]
        },
        {
            name: `${data.projects.perdidos.name}`,
            title: "Social Network for Travelers",
            description: data.projects.perdidos.description,
            challenge: data.projects.perdidos.challenge,
            deploy: null,
            github: null,
            images: [
                Landingpokedex,
                edit,
                newpokemon
            ],
            technologies: [
                {
                    img:Typescripticon,
                    name:'Typescript'
                }
                ,
                {
                    img:reactnativeIcon,
                    name:'React Native'
                },
                {
                    img:kotlinIcon,
                    name:'Kotlin'
                },
                {
                    img:Cssicon,
                    name:'CSS Modules'
                },
                {
                    img:nestjsIcon,
                    name:'NestJS'
                }
                ,
            ]
        },
        {
            name:`${data.projects.reactcrush.name}`,
            description: data.projects.reactcrush.description,
            challenge: data.projects.reactcrush.challenge,
            deploy: 'https://react-crush-seven.vercel.app/',
            github:'https://github.com/lautaro012/React-Crush',
            images: [
                reactCrush,
                reactFinish
            ],
            technologies: [
                {
                    img:Reacticon,
                    name:'React'
                },
                {
                    img:JsIcon,
                    name:'Javascript'
                },
                {
                    img:Cssicon,
                    name:'CSS Modules'
                },
            ]
        }
    ]


    return (
        <div className="">
            <span><h2 className="duration-500 lg:m-20 m-12 font-xl font-bold dark:text-white ">My Projects</h2></span>
            <div className="md:max-w-full md:flex md:flex-wrap lg:justify-center">
            {
                    proyects.map(el => {
                        return (
                            <Card data={data.projects.card} key={el.name} el={el}></Card>
                        )
                    })
            }
            </div>
        </div>
    )
}