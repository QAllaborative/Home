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
                                    <Typography paragraph variant="h5"><strong>Content</strong></Typography>
                                    <Typography paragraph variant="h6">
                                      * Object Oriented Programming: Concepts, pillars, techniques and which are the most used programming languages in Automation and New Zealand.<br></br>
                                      * Anatomy of the code: Classes, methods, variables, conditionals, loops, try/catch and more.<br></br>
                                      * Source Control Management: Branching models, working as a team, best practices and more.<br></br>
                                      * Hands On Practice: Creating a repository with basic code examples and work as a team with SCM.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5"><strong>Who is this course for?</strong></Typography>
                                    <Typography paragraph variant="h6">
                                      * Test Analysts who want to grow their automation skills.<br></br>
                                      * People with no coding background wanting to start their automation career.<br></br>
                                      * Automation Testers who want to know the foundations to grow their careers.<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5"><strong>What you will need to take this course.</strong></Typography>
                                    <Typography paragraph variant="h6">
                                      * A personal computer or laptop. <br></br>
                                      * Learning mindset!<br></br>
                                      * Internet connection.<br></br>
                                      * Optional: A headset to communicate.<br></br>
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

