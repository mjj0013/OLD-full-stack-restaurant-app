import React, { useState } from "react";
// import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { 
    InputGroup, InputGroupAddon,Input, Button,
    ListGroup, ListGroupItem,ButtonDropdown, 
    UncontrolledCarousel, CardGroup, Card, CardImg, CardBody} from "reactstrap";
import styles from "../styles/Home.module.css"


const getSearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    )
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
    
    return (
        <ApolloProvider client={client}>
            {/* <div className="search">
                
            </div> */}
           
            {/* <div id="d" style={{display:"block",position:"absolute",top:"120%", left:"0px", width:"50", height:"23"}}>asdf</div> */}
           
            

            <ListGroup id="homePageSectionGroup">
                <ListGroupItem className="pageSection section1">
                  
                </ListGroupItem>
                <ListGroupItem className="pageSection section1">
                    <Card className="sectionCard">
                    <div className="search">
                        <h2>Local Restaurants</h2>
                        <InputGroup >
                            <ButtonDropdown id="searchCatSelector"></ButtonDropdown>
                            
                            <Input id="searchField" onChange={(e) =>setQuery(e.target.value.toLocaleLowerCase())} value={query}/>
                            <Button id="searchBtn" outline={true}> {getSearchIcon()} </Button>
                        </InputGroup><br></br>
                        <RestaurantList search={query} />
                    </div>
                        
                        <CardImg className="sectionCardImage" src="https://upload.wikimedia.org/wikipedia/commons/3/35/SimpleRestaurantMinsk.jpg">
                        
                        </CardImg>
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
  