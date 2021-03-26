import React from "react"
import Link from "@material-ui/core/Link"
import Footer from "../pages/Footer"
import logo from "../styles/logo1.jpg"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"


const ListLink = props => (
  <li
    style={{
      display: `inline`,
      marginRight: `1rem`,
      marginTop: `33px`,
      float:`right`
    }}
  >
    <Link
      href={props.to}
      style={{ color: "black", backgroundImage: "none"}}
      underline="always"
      aria-label={props.children}
    >
      {props.children}
    </Link>
    
  </li>
)

export default function Layout({ children }) {
  const classes = makeStyles()
  return (
    <div className="header">
      <Grid>
        <img src={logo} className={classes.img} alt="name Logo" />
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/">About</ListLink>
       
        {children}
      </Grid>
    </div>
  )
}
