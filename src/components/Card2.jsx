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
                                  to be ready to join the testing market. From starting, to mastering it, be a Selenium developer in no time!
                                </Typography>
                                  <span><i className="fa icon-time" /> 24hs </span>
                                  <span><i className="fa fa-dollar" /> 2160 NZD </span>
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
                                      <Typography paragraph variant="h5"><strong>Content.</strong></Typography>
                                      <Typography paragraph variant="h6">
                                      * Setting up the workspace: Installation of VSCode, JDK, Plugins, Selenium and more!<br></br>
                                      * Creating our first project with Gradle and Java for Selenium.<br></br>
                                      * Selenium basics: creation of a Page Object Model framework with Cucumber, TestNG, PageFactory and more!<br></br>
                                      * Alternative Frameworks for different needs.
                                      * Selenium advanced: Complex actions, dependency injection, generating reports and more!<br></br>
                                      * Hands on practice: Creating a framework and Automated Test Cases for real world applications.<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5"><strong>Who is this course for?</strong></Typography>
                                      <Typography paragraph variant="h6">
                                      * Test Analysts who want to grow their automation skills.<br></br>
                                      * People with no coding background wanting to learn UI Automation with Selenium.<br></br>
                                      * Anyone willing to learn Automation Testing with Selenium!<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5"><strong>What you will need for this course?</strong></Typography>
                                      <Typography paragraph variant="h6">
                                      * A personal computer or laptop. <br></br>
                                      * Learning mindset!<br></br>
                                      * Internet connection.<br></br>
                                      * A headset to communicate.<br></br>
                                      * Optional: A cup of the infusion of your preference.<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5"><strong>Where and when is this happening?</strong></Typography>
                                      <Typography paragraph variant="h6">
                                      * Online trainings using Zoom announced here, on LinkedIn and the calendar!<br></br>
                                      * On-site trainings on your company on demand!<br></br>
                                      * Local venues across New Zealand when announced.<br></br>
                                      Get your spot for the workshops, webinars and talks on Eventbrite!<br></br>
                                      </Typography>
                                      <Typography paragraph variant="h5"><strong>Take aways.</strong></Typography>
                                      <Typography paragraph variant="h6">
                                      You will get the knowledge not only to build UI Frameworks with Selenium, but also to understand how it works and have the
                                      flexibility to take different approaches depending on the project's needs!
                                      </Typography>
                                      <Typography paragraph variant="h5"><strong><a href="https://www.eventbrite.co.nz/e/the-definitive-selenium-webdriver-workshop-tickets-131810313195" target="_blank" rel="noopener noreferrer">Save a seat!</a></strong></Typography>
                                    </CardContent>
                                    </Collapse>
        </Card>
            )
}
                                
export default CardTwo;

