import React from "react"
import Layout from "../components/layout"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { List, ListItem, ListItemText } from "@material-ui/core"
import logo from "../styles/SLTLogo.jpg";

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
         
            <Grid container spacing={2}>
              
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      className="work"
                    >
                      Developer Experience
                    </Typography>
                    <Typography variant="body2" gutterBottom className="work">
                      Location : USA
                      <List>
                        {/**
                         * <ListItem>
                          <a href ="www.microsoft.com/en" style={{height:'33px', width:'169px', textDecoration:'none'}} >
                            <img
                          src="https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png"
                          /></a> </ListItem>
                         */}
                        <ListItem style={{fontStyle:'bold', fontSize:'24px'}}>Microsoft</ListItem>
                        <ListItemText className="work">
                          Currently at Microsoft I work  in a team which is laser
                          focussed on compliance and security across all
                          Microsoft tenants. The learnings on this team have
                          provided great insights into security and web
                          accessibility which is one of the compliance metrics I take a lead on . 
                          I work with the
                          Data Team on collating data in an Enterprise Data Lake
                          and running ML algorithms to generate insights into
                          data while creating reporting dashboards on PowerBI.
                        </ListItemText>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <ListItem>
                            <img src={logo} style={{width:150, marginTop:'20px'}} alt="Sur La Table logo"  />
                            </ListItem>
                            
                            <ListItemText className="work">
                              At SurLaTable , I was hired for my expertise in
                              Oracle Commerce Framework especially with
                              integration of payment gateways, online cooking
                              classes while supporting the migration of various
                              onprem solution to the AWS cloud. I was part of
                              the core team that built the foundational APIs
                              using Spring Framework along with ETLs in Python
                              and data warehousing on Snowflake.
                            </ListItemText>
                          </Grid>
                        </Grid>

                        <ListItem style={{fontSize:'24px', marginTop:'20px'}}>AT&T (Contractor)</ListItem>
                        <ListItemText className="work">
                             As a consultant for the Oracle Ecommerce Framework , I worked on setting up 
                             the B2B website for small and medium size business. I was part of the
                            core team that setup the architecture in phase 1 and worked with business partners
                            on automating backend jobs along with supporting the migration of the frontend to 
                            Angular JS.
                            </ListItemText>
                      </List>
                    </Typography>
                    <Typography variant="body2" gutterBottom className="work" style={{marginTop:'25px'}}>
                      Location : UK
                      <List>
                        <ListItem style={{fontSize:'24px'}}>Demand247/Conexus Ltd</ListItem>

                        <ListItemText>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            className="work"
                          >
                            I was working as a Oracle Ecommerce
                            Consultant(formerly known as ATG) at D247 and worked
                            with clients such as Epson, Burberry to roll out
                             Internationalization(i118n along with
                            Security and Onprem infrastructure support . This
                            was my introduction to DevOps much before the term DevOps became
                            mainstream.
                          </Typography>
                        </ListItemText>
                      </List>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
         
        </div>
      </Layout>
    </div>
  )
}
