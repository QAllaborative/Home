import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      marginBottom: 15
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      width: 90
    },
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    list: {
      width: 200
    }
  }));
  
  const CardFive = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
        <CardHeader
                              title="Cypress E2E Automation."
                              subheader="Learn one of the latest and most popular frameworks!"
                            />
                            <CardMedia
                              className={classes.media}
                              image="images/robo4.jpg"
                              title="Cypress, the new kid no the automation block!"
                            />
                            <CardContent>
                              <Typography variant="h6" color="textSecondary" component="p">
                                A revolutionary framework for E2E Testing with minimal setup needed and robust functionalities! Ideal for Front End
                                Developers or testers who want to code close to the devs under a NodeJS environment.
                              </Typography>
                                <span><i className="fa icon-time" /> 8hs </span>
                                <span><i className="fa fa-calendar" /> TBD </span>
                                
                            </CardContent>
                              <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                            <ExpandMoreIcon />
                              </IconButton>
                              </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                  <CardContent>
                                    <Typography paragraph variant="h5">Setting up the workspace.</Typography>
                                    <Typography paragraph variant="h6">
                                    * Installing NodeJS.<br></br>
                                    * Installing VSCode.<br></br>
                                    * Installing Plugins to work with Javascript.<br></br>
                                    * Introduction to NPM.<br></br>
                                    * Installing Cypress using NPM.<br></br>
                                    * Installing Mochawesome package for reporting.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Creating the Framework.</Typography>
                                    <Typography paragraph variant="h6">
                                    * Introduction to Cypress.<br></br>
                                    * Getting to know the Cypress tool.<br></br>
                                    * Creating a Test with Cypress.<br></br>
                                    * Live mode and executing tests locally.<br></br>
                                    * How to locate webelements with Cypress.<br></br>
                                    * Advanced Commands in Cypress.<br></br>
                                    * Page Object Model with Cypress: Is it possible? How?<br></br>
                                    * Handling Test Data with Fixtures.<br></br>
                                    * Iterating Test Data.<br></br>
                                    * HTTP Requests with Cypress.<br></br>
                                    * Assertions with Mocha on Cypress.<br></br>
                                    * The Cypress.json file: What is it for and how to take advantage from it?<br></br>
                                    * Storing Screenshots and videos of our executions.<br></br>
                                    * The dashboard: how and when to use it.<br></br>
                                    * Creating beautiful reports with Mochawesome.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Cypress advanced.</Typography>
                                    <Typography paragraph variant="h6">
                                    * The Package.json file: How to use it.<br></br>  
                                    * Creating custom commands on Cypress.<br></br>
                                    * The Cypress.json file: What is it for and how to take advantage from it?<br></br>
                                    * Storing Screenshots and videos of our executions.<br></br>
                                    * The dashboard: how and when to use it.<br></br>
                                    * Creating beautiful reports with Mochawesome.<br></br>
                                    * Patterns in Cypress: Limitations and workarounds.<br></br>
                                    * When and why should a team use Cypress?<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Hands on practice.</Typography>
                                    <Typography paragraph variant="h6">
                                    * Real world workshop setting up a Cypress framework to test API and UI.<br></br>
                                    * Brainstorming of the students and teacher.<br></br>
                                    * Implementation of the framework, test case creation and creation of repository.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Take aways.</Typography>
                                    <Typography paragraph variant="h6">
                                      After this training you will be able to recommend Cypress giving solid fundaments and implement a quick and robust
                                      E2E Automation Framework following the best practices.
                                    </Typography>
                                  </CardContent>
                                  </Collapse>
      </Card>
            )
}
                                
export default CardFive;

