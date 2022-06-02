import styles from "../styles/globals.css"
import Cart from "../components/cart"

import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Home from "./index"
import Layout from "../components/layout"
import Cookie from "js-cookie"

import {Button, Card } from "reactstrap";

const cartIcon = (color) => {
  return (<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill={color} class='bi bi-cart3' viewBox='0 0 16 16'><path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/></svg>)

}
// window.onscroll = () => {
//   document.body.style.setProperty('--scrollVar',  `${Math.round(100*window.pageYOffset/(window.innerHeight))}%`)    // document.body.offsetHeight-
//   if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) setAtPageTop(false)
//   else setAtPageTop(true)
// }

function MyApp(props){
  var {cart,addItem,removeItem, user, setUser} = useContext(AppContext)
  const [state,setState] = useState({cart:cart, cartShowing:false});
  const { Component, pageProps } = props;
  
  
  setUser = (user) => {
    setState({ user });
  };
  addItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if(items.length > 0){
      foundItem = items.find((i) => i.id === item.id);
     
      if(!foundItem) foundItem = false;
    }
    else{
      foundItem = false;
    }
    console.log(`Found Item value: ${JSON.stringify(foundItem)}`)
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1
    
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
          items: [...state.cart.items,temp],
          total: state.cart.total + item.price,
      }
      setState({cart:newCart})
      console.log(`Total items: ${JSON.stringify(newCart)}`)
    } else {
      // we already have it so just increase quantity ++
      console.log(`Total so far:  ${state.cart.total}`)
      newCart= {
          items: items.map((item) =>{
            if(item.id === foundItem.id){
              return Object.assign({}, item, { quantity: item.quantity + 1 })
             }else{
            return item;
          }}),
          total: state.cart.total + item.price,
        }
    }
    setState({cart: newCart});  // problem is this is not updated yet
    console.log(`state reset to cart:${JSON.stringify(state)}`)
     
  };
  removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) =>{
        if(item.id === foundItem.id){
          return Object.assign({}, item, { quantity: item.quantity - 1 })
         }else{
        return item;
      }}),
      total: state.cart.total - item.price,
      }
      //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else { // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`)
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart= { items: items, total: state.cart.total - item.price } 
    }
    setState({cart:newCart});
  }

  var cartButtonClicked = (e) =>{
    setState({...state, cartShowing:true});
    document.getElementById('cartSideBar').classList.toggle('showing');
    document.getElementById('cartSideBarHandle').classList.toggle('showing');
  }

  return (
    <AppContext.Provider value={{cartShowing:state.cartShowing, cart: state.cart, addItem: addItem, removeItem: removeItem,isAuthenticated:false,user:null,setUser:()=>{}}}>
      <Head>
        <link rel="stylesheet" crossOrigin="anonymous"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        />
      </Head>
  

       
      <Button id="cartSideBarHandle" onClick={(e)=>cartButtonClicked(e)}>{cartIcon('white')}</Button>
      


      <Card id="cartSideBar">
        <Cart></Cart>
      </Card>

      <Layout>
          <Component {...pageProps} />
      </Layout>
      
    </AppContext.Provider>
  );
  
}


export default MyApp;
