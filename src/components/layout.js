import React from "react"
import { Link } from "gatsby"
import Footer from "../pages/Footer";
import logo from "../styles/Name.jpg";
import css from "../styles/main.css";
import Grid from '@material-ui/core/Grid';
 

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to} style={{color:'black'}}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  
  return (
    <div className="header">
      <img src={logo} className="img" />
      <header>
        
        <ul style={{ float: `right`, marginTop:`25px`}}>
          <ListLink to="/">About</ListLink>
          <ListLink to="/work/">Work</ListLink>
          <Footer/>
        </ul>
      </header>
      {children}
     
    </div>
    
  )
}