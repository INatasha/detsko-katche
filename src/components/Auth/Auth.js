import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    maxWidth: '400px',
  },
  divInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: 'center',
  },
  textfield: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

function Auth({ onAuth }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log({ email, password });
  const elements = [
    {
      key: 'email',
      label: 'Електронска адреса',
      placeholder: 'Внеси електронска адреса',
      type: 'email',
      onChange: (event) => setEmail(event.target.value),
      required: true,
      autoFocus: true,
    },
    {
      key: 'textfield_password',
      label: 'Лозинка',
      placeholder: 'Внеси лозинка',
      type: 'password',
      onChange: (event) => setPassword(event.target.value),
      required: true,
    },
  ];

  const title = 'Регистрација';
  const content = elements.map((element) => (
    <TextField
      key={element.key}
      autoFocus={element.autoFocus || false}
      required={element.required || false}
      autoComplete="off"
      type={element.type || 'text'}
      className={classes.textfield}
      fullWidth
      variant="outlined"
      label={element.label || ''}
      placeholder={element.label || ''}
      onChange={element.onChange}
      InputLabelProps={{ shrink: true }}
    ></TextField>
  ));

  function handleSubmit() {
    onAuth(email, password);
  }

  return (
    <Paper className={classes.paper}>
      {content}
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        fullWidth
        size="large"
      >
        Најави се
      </Button>
      <hr />
      <div className={classes.divInfo}>
        <Typography variant="subtitle1" gutterBottom>
          Ако си нов корисник, регистрирај се тука:
        </Typography>
      </div>
      <Button
        className={classes.button}
        color="primary"
        variant="outlined"
        onClick={handleSubmit}
        fullWidth
        size="large"
      >
        Регистрирај се
      </Button>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
