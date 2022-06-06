import React, { useState,useEffect } from "react";
// import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { 
    InputGroup, InputGroupAddon,Input, Button,
    ListGroup, ListGroupItem,ButtonDropdown, 
    UncontrolledCarousel, CardGroup, Card, CardImg, CardBody} from "reactstrap";
import styles from "../styles/Home.module.css"
// import { useEffect } from "react/cjs/react.production.min";



const getSearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    )
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
    
    // spaghetti : https://upload.wikimedia.org/wikipedia/commons/a/ad/Bistro_Jeanty_-_Sarah_Stierch_-_May_2018_03.jpg
    /*
        {
    altText:"Card image", src:"https://upload.wikimedia.org/wikipedia/commons/2/25/Pizza_ist_fertig_%2815483130834%29.jpg",key:2
        },
                       
        {
    altText:"Card image", src:"https://upload.wikimedia.org/wikipedia/commons/7/73/Cruise_boat_and_restaurant.jpg",key:2
        },
           
    */

     // <img className="noodleImage" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Noodles_2.png" 
    
    var svgGridIndices = {
        x:Array(7).fill(0).map((x,i)=> {return x+i}),
        y:Array(7).fill(0).map((x,i)=> {return x+i}),
    }
    // svgGridIndices = svgGridIndices
    

    var transparentBackgroundFood = [
        null,
        null,
        null,
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sushi_roll.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Noodles_2.png",
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Filet-O-Fish_transparent.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Spinach_leaves.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Rhubarb_pie.png",
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Kinder_Joy.png",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/3_fried_eggs.png",
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png"

    ]
    // var iter = 0;
    // useEffect(()=> {
    //     document.addEventListener("mousedown",()=> {
    //         var style = getComputedStyle(document.body);
    //         console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--grideShadeIter'))
    //         // document.documentElement.style.setProperty('--grideShadeIter', `${32+iter*2}%`)
    //         // ++iter;
    //     }, false )
    // })


    return (
        <ApolloProvider client={client}>
            {/* <div className="search">
                
            </div> */}
           
            {/* <div id="d" style={{display:"block",position:"absolute",top:"120%", left:"0px", width:"50", height:"23"}}>asdf</div> */}
           
           

            <ListGroup id="homePageSectionGroup" flush={true}>


                <ListGroupItem className="pageSection section0">
                        <div className="search">
                            <h2>Local Restaurants</h2>
                            <InputGroup >
                                <Input className="searchField" onChange={(e) =>setQuery(e.target.value.toLocaleLowerCase())} value={query}/>
                                <Button className="searchBtn" outline={true}> {getSearchIcon()} </Button>
                            </InputGroup><br></br>
                            <RestaurantList search={query} />
                        </div>
                    <svg id="backgroundSection0">
                        {/* <filter id="lightFilter">
                            <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="hsl(220, 50%, 80%)">
                                <fePointLight x="800" y="200" z="150" />
                            </feDiffuseLighting>
                            <feSpecularLighting result="light2" specularExponent="2" lighting-color="white">
                                <fePointLight x="50" y="50" z="150" />
                            </feSpecularLighting>
                            <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
                        </filter>
                        <rect filter="url(#lightFilter)" id="gridBackground" x={0} y={0} width={svgGridIndices.x.length*100} height={svgGridIndices.y.length*100} />
                             */}
                             
                        <defs>
                            
                            <filter id='lightFilter'>
                                <feDiffuseLighting result='light2' lighting-color='white' >
                                    <fePointLight x='100' y='250' z='145'/>
                                </feDiffuseLighting>
                                <feComposite in='SourceGraphic' in2='light2' operator='in' />
                            </filter>
                        </defs>
                        
                        <rect  x='0' y='0' width='100%' height='100%' fill='hsl(var(--hueSection0),75%, 30%)' />
                        <linearGradient id="pathGrad" >
                                <stop offset="20%" stop-color='hsl(var(--hueSection0), 75%, 30%)' ></stop>
                                    
                                <stop offset="80%" stop-color='hsl(var(--hueSection0), 75%, 80%)' >
                                    
                                </stop>
                                <animateTransform attributeName="gradientTransform" type="rotate" attributeType="XML" values="0 0; 360 360" dur="4s" repeatCount="indefinite"  />
                            </linearGradient>
                        <path id="path1" fill={"url(#pathGrad)"}  d='M 580.128 450.409 v -100 h -105 v 105 h 5.422 v -100 h 95 v 95 v 205 h 305 v -505 h -5 v 500 h -295 V 451.335'>
                             
                             
                        </path>
                        
                       
                        {/*  M 580.19 455.17 v -105 h -105 v 105 h 5 v -100 h 95 v 100 z */}
                        <g id="gridSquares">
                            {
                                svgGridIndices.x.map(x=>{
                                    
                                    return svgGridIndices.y.map(y=>{
                                        var randomIdx = getRandomInt(0, transparentBackgroundFood.length);
                                        var randomImg = transparentBackgroundFood[randomIdx];
                                        return( 
                                            <g className="gridShape">
                                                
                                                <rect className="gridRect" x={x*100+5} y={y*100+5} width={90} height={90} />
                                                {randomImg? <image x={x*100+22.5} y={y*100+22.5} height={45} width={45} href={randomImg} />: null}
                                            </g>
                                        
                                        )
                                    })
                                })
                            }
                        </g>
                    </svg>
                                      
                </ListGroupItem>
                <ListGroupItem className="pageSection section1">
                    <Card className="sectionCard">
                        <div className="search">
                            <h2>Local Restaurants</h2>
                            <InputGroup >
                                <Input className="searchField" onChange={(e) =>setQuery(e.target.value.toLocaleLowerCase())} value={query}/>
                                <Button className="searchBtn" outline={true}> {getSearchIcon()} </Button>
                            </InputGroup><br></br>
                            <RestaurantList search={query} />
                        </div>
                        <CardImg className="sectionCardImage" src="https://upload.wikimedia.org/wikipedia/commons/3/35/SimpleRestaurantMinsk.jpg"></CardImg>
                    </Card>

                </ListGroupItem>
                <ListGroupItem className="pageSection sushi">
                    <Card className="sectionCard sushi" >
                        <img src="./sushiCropped.png" />
                      
                        {/* <CardImg className="sushiPlateImage" altText="Card image" src="https://upload.wikimedia.org/wikipedia/commons/1/12/Sushi_Platte_%2825966154454%29.jpg" /> */}
                    </Card>
                </ListGroupItem>
                <ListGroupItem className="pageSection section1">
                    
                   
                    <UncontrolledCarousel className="imageCarousel" items={[
                        {
                            altText:"Card image", src:"https://upload.wikimedia.org/wikipedia/commons/b/bf/05_Wine_glasses_upside_down_in_a_restaurant_in_Barcelona%2C_Spain.jpg",key:1
                        },
                        {
                            altText:"card", src:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Stuffed_Tomato_Curry_Rayagada_Odisha_02.jpg", key:2
                        },
                        {
                            altText:"Card image", src:"https://upload.wikimedia.org/wikipedia/commons/0/04/Fagioli_all%27uccelletto.jpg",key:3
                        },
                
                    ]}/>
                   
                </ListGroupItem>

                

                <ListGroupItem className="pageSection">

                </ListGroupItem>

            </ListGroup>

            {/* <Cart></Cart> */}
            
           
        </ApolloProvider>
    );
  }
  export default Home;
  