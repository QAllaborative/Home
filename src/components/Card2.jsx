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
  
  const CardTwo = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
              
        <Card className={classes.card}>
          <CardHeader
                                title="The definitive Selenium Webdriver workshop!"
                                subheader="The first and last Selenium workshop you will need!"
                              />
                              <CardMedia
                                className={classes.media}
                                image="images/robo1.jpg"
                                title="The first and last Selenium workshop you will need!"
                              />
                              <CardContent>
                                <Typography variant="h6" color="textSecondary" component="p">
                                  Unlike most workshops, here you will get the knowledge to tackle Selenium Webdriver with a wide arrange of techniques, tools and languages
                                  to be ready for the market. From starting, to mastering it, be a Selenium ready tester in no time!
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
                                      <Typography paragraph variant="h5">Selenium with Java and Cucumber</Typography>
                                      <Typography paragraph variant="h6">
                                      * Setting up the workspace: VSCode, JDK, Plugins and more!<br></br>
                                      * Creating our first project with Gradle/Maven and Java.<br></br>
                                      * Creating our Base Page class. Introduction to Selenium.<br></br>
                                      * Modifiers in Java: The Static modifier.<br></br>
                                      * Exploring the HTML of a website. DevTools, plugins recommended and how to use them.<br></br>
                                      * Locators in Selenium: What are they? How do we create them?<br></br>
                                      * Page Object Model: What is it and why is so important?<br></br>
                                      * Introduction to Cucumber: When to use it and when not to use it.<br></br>
                                      * How to manage Test Data in our Automation Framework.<br></br>
                                      * Cucumber: Introduction to Step definitions. <br></br>
                                      * Taking our Cucumber workflow to the next level!<br></br>
                                      * Waits in Selenium: Explicit and Implicit. When to use them? When not to use them?<br></br>
                                      * Generating reports with Cucumber. Plugins and libraries recommended and how to configure them.<br></br>
                                      * Adding parameters to our Cucumber scenarios.<br></br>
                                      * Validating our tests with Assertions. What are they and how to implement them.<br></br>
                                      * Working with dropdowns and select web elements in Selenium.<br></br>
                                      * Closing the browser when our tests are completed. Setting blocks of code to run before and after executions.<br></br>
                                      * Error handling: What is it and how to implement it in our Automation Framework?<br></br>
                                      * Regular Expressions in Cucumber: What are they and how to use them.<br></br>
                                      * Handling static grids in Selenium.<br></br>
                                      * Handling dynamic grids in Selenium.<br></br>
                                      * iFrames in Selenium: How to handle and work with them?<br></br>
                                      * Uploading files with Selenium: Is it possible? How?<br></br>
                                      * Soft Assertions: What are they? How and when to use them?<br></br>
                                      * Pending Exceptions with Cucumber: What are they and when to use them?<br></br>
                                      * Executing scenarios grouped by tag from the command line!<br></br>
                                      * PageFactory: What is it and how to use it?<br></br>
                                      * Tip to improve execution times with Page Factory.<br></br>
                                      * TestNG instead of Cucumber: What is it, how to use it and when is the best idea to do so.<br></br>
                                      * Creating Tests with TestNG.<br></br>
                                      * Grouping Tests with TestNG suites.<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5">Advanced Selenium WebDriver.</Typography>
                                      <Typography paragraph variant="h6">
                                      * Dependency injection: What is it and when to use it?<br></br>
                                      * Creating the World object, keys to this concept.<br></br>
                                      * Connecting the WebDriver with the World class.<br></br>
                                      * Using this framework, hands on!<br></br>
                                      * Adding crossbrowser capabilities to our framework.<br></br>
                                      * Creating our real world Automation project putting the gained knowledge into practice!<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5">Final practice.</Typography>
                                      <Typography paragraph variant="h6">
                                      * Automation feasibility of a Web Site<br></br>
                                      * Creating the framework in groups.<br></br>
                                      * Brainstorming the approach.<br></br>
                                      * Implementation of the framework.<br></br>
                                      * Automating test cases while working with SCM in groups.<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5">Take aways.</Typography>
                                      <Typography variant="h6">
                                      Work with the best practices in mind in Automation for UI Testing. Join a team already working with SCM, suggest
                                      to use it if not, and be able to create the workflow to achieve the highest efficiency. 
                                      </Typography>
                                    </CardContent>
                                    </Collapse>
        </Card>
            )
}
                                
export default CardTwo;

