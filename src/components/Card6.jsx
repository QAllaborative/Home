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
                                    <Typography paragraph variant="h5">Continuous Integration.</Typography>
                                    <Typography paragraph variant="h6">
                                    * What is Continuous Integration?<br></br>
                                    * What is DevOps? <br></br>
                                    * Why do I need to integrate my work into the SDLC pipelines?<br></br>
                                    * What are the most used tools in the market and in New Zealand?<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Jenkins.</Typography>
                                    <Typography paragraph variant="h6">
                                    * What is Continuous Integration?<br></br>
                                    * What is DevOps? <br></br>
                                    * Why do I need to integrate my work into the SDLC pipelines?<br></br>
                                    * What are the most used tools in the market and in New Zealand?<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Github Actions.</Typography>
                                    <Typography paragraph variant="h6">
                                    * What is Continuous Integration?<br></br>
                                    * What is DevOps? <br></br>
                                    * Why do I need to integrate my work into the SDLC pipelines?<br></br>
                                    * What are the most used tools in the market and in New Zealand?<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">Hands on practice!</Typography>
                                    <Typography paragraph variant="h6"> 
                                    * What is Continuous Integration?<br></br>
                                    * What is DevOps? <br></br>
                                    * Why do I need to integrate my work into the SDLC pipelines?<br></br>
                                    * What are the most used tools in the market and in New Zealand?<br></br>
                                    </Typography>
                                    <Typography paragraph variant="h5">What you will get from this workshop.</Typography>
                                    <Typography paragraph variant="h6">
                                    * What is Continuous Integration?<br></br>
                                    * What is DevOps? <br></br>
                                    * Why do I need to integrate my work into the SDLC pipelines?<br></br>
                                    * What are the most used tools in the market and in New Zealand?<br></br>
                                    </Typography>
                                  </CardContent>
                                  </Collapse>
      </Card>
            )
}
                                
export default CardSix;

