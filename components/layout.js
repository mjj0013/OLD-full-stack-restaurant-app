/* /components/Layout.js */

import React, { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem,Button } from "reactstrap";
import AppContext from "./context";

const Layout = (props) => {

  const [atPageTop, setAtPageTop] = useState(true)
  const title = "Welcome to Nextjs";
  window.onscroll = () => {
    
    document.body.style.setProperty('--scrollVar',  `${Math.round(100*window.pageYOffset/(window.innerHeight))}%`)    // document.body.offsetHeight-
    
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
      
      setAtPageTop(false)
    }
    else setAtPageTop(true)
  }

  function moveToPageTop() {
    
    window.scrollTo(0,0);
  }

  const {user} = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark" >

          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>

          
          <NavItem className="ml-auto">
            {atPageTop ? (
             null
            ) : (
              <Link href="/">
                <button className="nav-link" onClick={moveToPageTop}>Search</button>
              </Link>
            )}
          </NavItem>
          <NavItem >
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register">
                <a className="nav-link"> Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Sign in</a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;