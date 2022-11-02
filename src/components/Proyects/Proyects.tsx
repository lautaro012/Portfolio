import React from "react";
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from "../Card/Card.jsx";
AOS.init();



export interface ProyectProp {
   name:string,
   description:string
}

const proyects = [
    { 
        name:"Henry's Restaurant", 
        description: "Digital Restaurant where you can choose and buy your food as user. Administrate users, products, orders and deliverys as Admin. And Deliver the orders as Delivery",
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
            {
                img:Cssicon,
                name:'CSS Modules'
            },
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
        name:"Henry's Game Store",
        description: "E-commerce of digital videogames",
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
        name:"Let's Cook!",
        description : "Find, Create and Manage your favorites recipes",
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
        name:"Pokedex",
        description: "List of Pokemons",
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
        name:"React -Candy Crush-",
        description: "Candy Crush developed only whit React and Javascript Logic",
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

export default function Proyects () {

    return (
        <div className="bg-background p-4 ">
            <h1>My Projects</h1>
           {
                proyects.map(el => {
                    return (
                        <Card key={el.name} el={el}></Card>
                    )
                })
           }
        </div>
    )
}