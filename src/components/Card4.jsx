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
  
  const CardFour = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
        <CardHeader
                              title="Katalon Studio"
                              subheader="A free, standalone framework with codeless capabilities!"
                            />
                            <CardMedia
                              className={classes.media}
                              image="images/robo3.jpg"
                              title="The ideal framework for teams with no coding background!"
                            />
                            <CardContent>
                              <Typography variant="h6" color="textSecondary" component="p">
                                One of the top tools in the Automation scene. From codeless capabilities to 
                                fully customizable scripts, built in reporting and recorder... this is a perfect fit for a team
                                with no coding background wanting to get into Automation quick!
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
                                    <Typography paragraph variant="h5">UI Automation with Katalon Studio.</Typography>
                                    <Typography paragraph variant="h6">
                                    * What is Katalon Studio? <br></br>
                                    * Advantages and limitations of Katalon Studio. <br></br>
                                    * Setting up the tool: JDK and Katalon installation. <br></br>
                                    * Running Katalon and getting to know the workspace. <br></br>
                                    * Katalon Spy Web: How to capture webelements easily. <br></br>
                                    * Katalon Object Repository: What is it and how to use it? <br></br>
                                    * What is a WebElement? <br></br>
                                    * Different types of Locators and how to use them. <br></br>
                                    * Tool to create Relative XPath easily. <br></br>
                                    * Groovy: What is this language and how to use it in Katalon. <br></br>
                                    * Creating a Test Case using Katalon Studio with Record Playback. <br></br>
                                    * Creating a Test Case using Katalon Studio with code. <br></br>
                                    * Error handling with Katalon. <br></br>
                                    * Advanced interactions on Web Applications with Katalon Studio. <br></br>
                                    * Condition handling and looping. <br></br>
                                    * Handling Test Data in Data Files. <br></br>
                                    * What is Katalon Studio? <br></br>
                                    * Taking screenshots with Katalon Studio. <br></br>
                                    * Creating Test Suites: Collections and report generation.<br></br>
                                    * Test Execution: Running our tests and execute blocks before and after.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">API Testing with Katalon.</Typography>
                                    <Typography paragraph variant="h6">
                                    * Introduction to WebServices and API: Concepts and terms. <br></br>
                                    * Advantages of API Automation against UI Automation: When to use each. <br></br>
                                    * Rest and SOAP WebServices. How to handle each one.<br></br>
                                    * JSON: Understanding it's structure. <br></br>
                                    * JSON: Manipulating and reading JSON files.<br></br>
                                    * Types of HTTP Request: GET, POST, PUT, UPDATE, DELETE. When and how to use each one. <br></br>
                                    * Setting up headers.<br></br>
                                    * Setting up proxies for HTTP Requests.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Advanced Katalon.</Typography>
                                    <Typography paragraph variant="h6">
                                    * BDD structure with Katalon Studio.<br></br>
                                    * Gherkin language: What is it and how to use it?<br></br>
                                    * Advanced Groovy scripting for custom keywords and listeners.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Hands on practice.</Typography>
                                    <Typography paragraph variant="h6">
                                    * Real world workshop setting up a framework to test API and UI.<br></br>
                                    * Brainstorming of the students and teacher.<br></br>
                                    * Implementation of the framework, test case creation and creation of repository.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">What you will get from this workshop.</Typography>
                                    <Typography paragraph variant="h6">
                                      After this workshop you will have a deep understanding of Katalon Studio and how to implement a framework
                                      around this tool for both UI and API Automation. You will be able to analyse the application under test, implement
                                      best practices and create robust test cases.
                                    </Typography>
                                  </CardContent>
                                  </Collapse>
      </Card>
            )
}
                                
export default CardFour;

