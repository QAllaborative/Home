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
  
  const CardOne = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
        <CardHeader
                              title="Software Development for Testers"
                              subheader="Start your journey in Automation Testing here!!"
                            />
                            <CardMedia
                              className={classes.media}
                              image="images/robo6.jpg"
                              title="All you need to know to take the first step towards automation!"
                            />
                            <CardContent>
                              <Typography variant="h6" color="textSecondary" component="p">
                                The very first step in order to start your journey in Automation with the right foot. Perfect for those with no background in coding or wanting to
                                understand deeply the programming concepts used on Test Engineering.
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
                                    <Typography paragraph variant="h5">Object Oriented Programming</Typography>
                                    <Typography paragraph variant="h6">
                                      * What is a programming language?<br></br>
                                      * Which are the most wanted languages in the market, both New Zealand and internationally?<br></br>
                                      * Object Oriented Programming and Automation Testing.<br></br>
                                      * Object Oriented Programming - Encapsulation: How is it used in Automation?<br></br>
                                      * Object Oriented Programming - Inheritance: How is it used in Automation?<br></br>
                                      * Object Oriented Programming - Abstraction: How is it used in Automation?<br></br>
                                      * Object Oriented Programming - Polymorphism: How is it used in Automation?<br></br>
                                      * Practical examples of these concepts applied to Automation Testing.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Anatomy of the code</Typography>
                                    <Typography paragraph variant="h6">
                                      * Installing the tools.<br></br>
                                      * What is an IDE?<br></br>
                                      * The class: What is it? How does it work?<br></br>
                                      * The method and function: What are they? How do they work?<br></br>
                                      * Variables: Types, use and how they are used.<br></br>
                                      * Conditionals: What are they? How do they work?<br></br>
                                      * Loops: The different types explained.<br></br>
                                      * Try/Catch: What are they? How are they used?<br></br>
                                      * Practical examples of these concepts applied to Automation Testing.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Working with Source Control Management</Typography>
                                    <Typography paragraph variant="h6">
                                      * What is Source Control Management? <br></br>
                                      * Why is SCM so important in Automation Testing?<br></br>
                                      * Parts of an Automation repository.<br></br>
                                      * Branches and Master: What are they and why we need to use them?<br></br>
                                      * Commands to work as part of a team with SCM.<br></br>
                                      * Fetching and Pulling code from the origin.<br></br>
                                      * Commiting the code: What you need to know.<br></br>
                                      * Pushing the code: What you nede to know.<br></br>
                                      * Creating a Pull Request: What are they and why are they so important?<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Hands on practice.</Typography>
                                    <Typography paragraph variant="h6">
                                    * Real world workshop setting up a repository and solving coding challenges.<br></br>
                                    * Brainstorming of the students and teacher to share different solutions.<br></br>
                                    * Explaining the techniques used and why they were picked as the go to approach.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Take aways.</Typography>
                                    <Typography paragraph variant="h6">
                                      After this training, you will have the coding skills needed to tackle the more advanced workshops in which
                                      we start automating tests, using all the concepts from this module. If you are already familiar with them, you
                                      can skip this workshop and start right from a more advanced one!
                                    </Typography>
                                  </CardContent>
                                  </Collapse>
      </Card>
            )
}
                                
export default CardOne;

