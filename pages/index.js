import React, { useState } from "react";
// import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { 
    InputGroup, InputGroupAddon,Input, Button,
    ListGroup, ListGroupItem,
    Carousel, CardGroup, Card, CardImg, CardBody} from "reactstrap";


function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
 
  
    return (
        <ApolloProvider client={client}>
            <div className="search">
                <h2> Local Restaurants</h2>
                <InputGroup >
                    <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                    <Input id="searchField" onChange={(e) =>setQuery(e.target.value.toLocaleLowerCase())} value={query}/>
                    <Button id="searchBtn"> Search </Button>
                </InputGroup><br></br>
            </div>
            <RestaurantList search={query} />
            <div id="d" style={{display:"block",position:"absolute",top:"120%", left:"0px", width:"50", height:"23"}}>asdf</div>
            {/* <Cart></Cart> */}
            
           
        </ApolloProvider>
    );
  }
  export default Home;
  