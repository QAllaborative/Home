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
  
  const CardSix = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
        <CardHeader
                              title="Continuous Integration for Testing."
                              subheader="The endgame of automation to fit into the DevOps world!"
                            />
                            <CardMedia
                              className={classes.media}
                              image="images/robo2.jpg"
                              title="Did Somebody say 'Jenkins'?"
                            />
                            <CardContent>
                              <Typography variant="h6" color="textSecondary" component="p">
                                You already have your framework running perfectly with your E2E Automated tests. Now it is time 
                                for the final step: Integrating the Testing work with the Development and Operations work!
                              </Typography>
                                <span><i className="fa icon-time" /> 16hs </span>
                                <span><i className="fa fa-calendar" /> 1440 NZD </span>
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
        * Installation of tools.<br></br>
        * Creation of our API Automation Framework.<br></br>
        * Creation of custom reports.<br></br>
      </Typography>
      <Typography paragraph variant="h5"><strong>Who is this course for?</strong></Typography>
      <Typography paragraph variant="h6">
      * Test Analysts who want to grow their automation skills.<br></br>
      * People with no coding background wanting to start their automation career.<br></br>
      * Automation Testers who want to know the foundations to grow their careers.<br></br>
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
      * Online trainings on the internet announced here, on LinkedIn and the calendar!<br></br>
      * On-site trainings on your company on demand!<br></br>
      * In hired rooms across New Zealand when announced.<br></br>
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
                                
export default CardSix;

