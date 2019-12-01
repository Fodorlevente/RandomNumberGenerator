import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    height: 15,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function NumberDisplay(props) {
  const classes = useStyles();

  return (
    <Grid container justify = "center">
        <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
            {props.value}
        </Typography>
        </Paper>
    </Grid>   

  );
}