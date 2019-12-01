import React, {useEffect, useState} from 'react';
import CalcButton from "./buttons/CalcButton";
import NumberDisplay from './displays/NumberDisplay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  div: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
}));

export default function Content() {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    
    useEffect(() => {
      fetchRandomNumber()
    }, []);

    function fetchRandomNumber(){
      fetch('/api/randomnumber')
      .then(response => response.json())
      .then(data => {
        if(data.status === 200){
          setValue(data.content);
        }
      })
      .catch(error => {
          console.log(error)
      })
    }

  return (
    <div className={classes.div}>
            <NumberDisplay value={value} />
            <CalcButton setValue={setValue} value={value} fetchRandomNumber={fetchRandomNumber}/>
    </div>
  );
}