import React from "react"
import  Link  from "@material-ui/core/Link"
import Footer from "../pages/Footer";
import logo from "../styles/logo1.jpg";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  active: {
    backgroundColor: 'pink'
  },
}));

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`,  marginTop:`33px`}}>
    <Link href={props.to}  
    style={{ color : 'black', backgroundImage:'none'}} 
    underline="always"
    active="true"
    >{props.children}</Link>
  </li>
)


export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className="header">
      <img src={logo} className="img" />
      <header>
        
        <ul style={{ float: `right`}}>
          <ListLink to="/" className={classes.active}>About</ListLink>
          <ListLink to="/work/">Work</ListLink>
          <Footer/> 
        </ul>
        
      </header>
      {children}
      
    </div>
    
    
  )
}