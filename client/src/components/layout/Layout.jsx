import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet"
import { ToastContainer, toast } from 'react-toastify'

const Layout = ({children,
  title = "Ecommerce App - Shop now",
  description = "mern stack project",
  keywords = "mern, react, node, mern",
  author = "AtulTechnofy"}) => {
  return (
    <div>
<Helmet>
  <meta charSet="utf-8" />
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <meta name="keywords" content="{keywords}" />
  <meta name="author" content="{author}" />
</Helmet>


        <Header/>
        {/* <h1>Layout</h1> */}
        <main style={{"min-height": "80vh"}}>
          <ToastContainer/>
        {children}
        </main>
        <Footer/>
    </div>
  )
}


export default Layout