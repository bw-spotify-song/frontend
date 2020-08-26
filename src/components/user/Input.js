import React from 'react'
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Input(props){

  const errorMessage = props.errors[props.name];
  return (
    <label>{props.label}
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={props.name}
            label= {props.label}
            name={props.name}
            autoComplete={props.name}
            autoFocus
            onChange = {props.onChange}
          />
      {errorMessage.length !== 0 && <p className="error">{errorMessage}</p>}
    </label>
  );
}