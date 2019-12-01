import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CalcButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Button variant="contained" disabled={props.value === 0} color="primary" onClick={() => props.setValue(props.value - 1)}>
            Substract
        </Button>
        <Button variant="contained" disabled={props.value === 100} color="primary" onClick={() => props.setValue(props.value + 1)}>
            Add
        </Button>
        <Button variant="contained" color="secondary" onClick={() => props.fetchRandomNumber()}>
            Reroll
        </Button>
    </div>
  );
}