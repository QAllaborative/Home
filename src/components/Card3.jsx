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
        <Typography variant="h6" color="textSecondary" component="p">
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
        <Typography paragraph variant="h5"><strong>Content.</strong></Typography>
        <Typography paragraph variant="h6">
        * Installation of tools and software for API Automation.<br></br>
        * Creation of an API Automation Framework from scratch.<br></br>
        * The concept of API and how to build basic Requests.<br></br>
        * Advanced API Automation techniques, iteration through JSON files and validating Responses.<br></br>
        * Handling TLS and Mutual TLS, as well as other forms of authentication and security used during this type of Testing.<br></br>
        * Handling complex responses and more advanced techniques.
        * Creation of custom reports.<br></br>
      </Typography>
      <Typography paragraph variant="h5"><strong>Who is this course for?</strong></Typography>
      <Typography paragraph variant="h6">
      * Testers wanting to follow the best practices of the Automation Pyramid and do API Automation.<br></br>
      * People who already have solid programming skills or took the Programming for Testers course.<br></br>
      * Automation Testers who want to grow their set of skills by adding Integration Testing and API Automation.<br></br>
      * Teams wanting to migrate their UI Tests to API to avoid high maintenance and common automation pitfalls.
      </Typography>
      <Typography paragraph variant="h5"><strong>What you will need for this course?</strong></Typography>
      <Typography paragraph variant="h6">
      * A personal computer or laptop. <br></br>
      * Learning mindset!<br></br>
      * Basic programming skills with Object Oriented Programming or completing the Programming for Testers course.<br></br>
      * Internet connection.<br></br>
      * A headset to communicate.<br></br>
      * Optional: A cup of the infusion of your preference.<br></br>
      </Typography>
      <Typography paragraph variant="h5"><strong>Where and when is this happening?</strong></Typography>
      <Typography paragraph variant="h6">
      * Online trainings on the internet announced here, on LinkedIn and the calendar!<br></br>
      * On-site trainings on your company on demand!<br></br>
      * Local venues across New Zealand when announced.<br></br>
      Get your spot for the workshops, webinars and talks on Eventbrite!<br></br>
      </Typography>
      <Typography paragraph variant="h5"><strong>Take aways.</strong></Typography>
      <Typography paragraph variant="h6">
        After this workshop you will be able to create frameworks from scratch, following the best practices, to test with API Automation. The knowledge you will get there is all based in my personal experience internationally as well as in New Zealand,
        thinking in what the market demands the most for this type of work.
      </Typography>
</CardContent>
</Collapse>
</Card>
    )
}
                                
export default Card3;

