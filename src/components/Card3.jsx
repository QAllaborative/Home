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
  
  const Card3 = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
        <CardHeader
            title="The Ultimate API Automation workshop."
            subheader="Integration testing done perfectly!"
        />
    <CardMedia
        className={classes.media}
        image="images/robo5.jpg"
        title="Implement the best practices in your automation work with this API Automation Workshop!"
    />
    <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
            Get into the world of API Automation with this extensive workshop covering the creation, from scratch, of a framework to automate HTTP Requests
            with Java, Rest Assured, Cucumber and Allure. Ideal for anyone who wants to add APIs to their toolbelt!
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
        <Typography paragraph>Setting up our workspace.</Typography>
        <Typography paragraph>
        * Installation of VSCode<br></br>
        * Using Gradle and getting the dependencies for our framework.<br></br>
        * Installation of Allure<br></br>
        * Installation of Cucumber<br></br>
        * Introduction to the concept of API: What are they? How can we test them?<br></br>

</Typography>
<Typography paragraph>Creating our API Automation Framework.</Typography>
<Typography paragraph>
        * Introduction to Rest Assured: What is it? How do we use it to test HTTP Requests?<br></br>
        * Using Cucumber to create our Scenarios for API Testing.<br></br>
        * Creation of Step Definitions for API Testing.<br></br>
        * JSON: What is it and how do we use it?<br></br>
        * Validating the HTTP Responses.<br></br>
        * HTTP Status Code and debugging.<br></br>
        * Handling TLS and security when doing HTTP Requests under secured connections.<br></br>
        * Iteration of nested values in the responses.<br></br>
        * Setting headers on our HTTP Requests.<br></br>
        * Making a GET Request.<br></br>
        * Making a POST Request: Use of body and parameters to be sent with our request.<br></br>
        * Making a PUT Request.<br></br>
        * Making a DELETE Request.<br></br>
        * Using cURL for API Test prototyping.<br></br>
</Typography>
<Typography paragraph>Creating our reports with Allure.</Typography>
<Typography paragraph>
        * Setting up the Allure: Plugins needed and code.<br></br>
        * Custom reports with Allure.<br></br>

</Typography>
<Typography paragraph>Hands on practice.</Typography>
                                    <Typography paragraph>
                                    * Real world workshop setting up a framework to test API and UI.<br></br>
                                    * Brainstorming of the students and teacher.<br></br>
                                    * Implementation of the framework, test case creation and creation of repository.<br></br>
                                    </Typography>
<Typography paragraph>What you will get from this workshop.</Typography>
<Typography paragraph>
After this workshop you will be able to create frameworks from scratch, following the best practices, to test with API Automation. The knowledge you will get there is all based in my personal experience internationally as well as in New Zealand,
thinking in what the market demands the most for this type of work.
</Typography>
</CardContent>
</Collapse>
</Card>
    )
}
                                
export default Card3;

