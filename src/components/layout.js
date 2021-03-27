import React from "react"
import Link from "@material-ui/core/Link"
import Footer from "../pages/Footer"
import logo from "../styles/logo1.jpg"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { SocialIcon } from "react-social-icons"

const ListLink = props => (
  <li
    style={{
      display: `inline`,
      marginRight: `1rem`,
      marginTop: `33px`,
      float: `right`,
    }}
  >
    <Link
      href={props.to}
      style={{ color: "black", backgroundImage: "none" }}
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
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/">About</ListLink>
        <img src={logo} className={classes.img} alt="name Logo" />
        <br />

        <SocialIcon
          url="https://www.linkedin.com/in/tawish/"
          bgColor="#000000"
          style={{
            height: 25,
            width: 25,
            textShadow: `none`,
            backgroundImage: `none`,
            left: `35px`,
          }}
        />
        <span style={{ paddingLeft: `40px` }}>&bull;</span>

        <SocialIcon
          url="https://github.com/tawish1310"
          bgColor="#000000"
          style={{
            height: 25,
            width: 25,
            textShadow: `none`,
            backgroundImage: `none`,
            left: `10px`,
          }}
        />
        <span style={{ paddingLeft: `15px` }}>&bull;</span>

        <SocialIcon
          url="https://medium.com/@tawish"
          bgColor="#000000"
          style={{
            height: 25,
            width: 25,
            textShadow: `none`,
            backgroundImage: `none`,
            left: `10px`,
          }}
        />
        
        {children}
      </Grid>
    </div>
  )
}
