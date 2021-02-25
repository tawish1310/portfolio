import React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import picture from "../styles/ProfilePic.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 500,
    height: 630,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function About({data}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout>
        {/*<h1> {data.site.siteMetadata.title}</h1> */}
        <div style={{ margin: `3rem auto`,  padding: `0 1rem` }}>
          <header style={{ marginBottom: `1.5rem` }}>
          
            <Grid container spacing={2}>
              <Grid item xs={6}>
                  <img
                    className={classes.image}
                    alt="Profile Picture"
                    src={picture}
                  />
              </Grid>
              
              <Grid item xs={6} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className="bio">
                     
                    </Typography>
                    
                    <Typography variant="body2" gutterBottom className="bio" >
                      <p style={{marginBottom:'40px'}}>I am a Full Stack Software Engineer and I have been working in the tech industry for the 
                      last decade across three continets while experiencing the software culture
                      and observing the diversity shift. As a noob, my initial
                      projects were focussed on powering up ecommerce for
                      various clients in the industry then progressing towards
                      helping them with their migration journey to DevOps and
                      more recently championing Web Accessibility while I packed
                      up my skills with Front End Frameworks.For now I am
                      excited to hop on the AI train while side hustling a
                      non-profit oragnization. From being the only woman in the
                      room during architectural discussions to now seeing the
                      push for inclusion and seeing the representation grow has
                      made it worthwhile.</p>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="bio"
                    >
                    Over the years, I have mentored a number of women in STEM and still continue to be part of 
                    mentoring circles
                    and impressed by the talent that is making its way to the industry. Apart from my day job I 
                    also participate
                    in Hackathons especially with projects that are focussed on non-profit solving 
                    pressing community needs.
                    I hold a Bachelors Degree in Electronics Engineering and 
                    graduated from Arkansas State Univeristy with a Masters in Engineering Managment and am fortunate 
                    enough to be part of the industry where one can continously learn and innovate and be a lifelong
                    learner.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{ cursor: "pointer" }}
                    ></Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1"></Typography>
                </Grid>
              </Grid>
            </Grid>

            <p></p>
          </header>
        </div>
      </Layout>
    </div>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`