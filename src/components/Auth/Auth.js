import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import RegistrationDialog from './RegistrationDialog';
import * as actions from '../../store/actions';
import * as CONST from '../../constants';

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
  alert: {
    marginBottom: theme.spacing(2),
  },
  circularProgress: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
  },
}));

function Auth({ loading, error, onAuth }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const errorMessage = error ? getErrorMessage(error) : null;
  const inputElements = [
    {
      key: 'email',
      label: 'Електронска адреса на родител',
      placeholder: 'Внеси електронска адреса на родител',
      type: 'email',
      onChange: (event) => setEmail(event.target.value),
      required: true,
      autoFocus: true,
      disabled: !isSignup && loading,
    },
    {
      key: 'textfield_password',
      label: 'Лозинка',
      placeholder: 'Внеси лозинка',
      type: 'password',
      onChange: (event) => setPassword(event.target.value),
      required: true,
      disabled: !isSignup && loading,
    },
  ];

  function handleSubmit(email, password) {
    onAuth(email, password, isSignup);
  }

  function getErrorMessage() {
    const errorCode = error.message;
    const errorMessage = CONST.ERROR_MESSAGES[errorCode];
    if (errorMessage) return errorMessage;
    else return CONST.ERROR_MESSAGES.GENERAL;
  }

  return (
    <Fragment>
      <Paper className={classes.paper}>
        {error && !isSignup && (
          <Alert className={classes.alert} severity="error">
            {errorMessage}
          </Alert>
        )}
        {inputElements.map((element) => (
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
            placeholder={element.placeholder || ''}
            onChange={element.onChange}
            InputLabelProps={{ shrink: true }}
            disabled={element.disabled || false}
          ></TextField>
        ))}
        <div style={{ position: 'relative' }}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={() => handleSubmit(email, password)}
            fullWidth
            size="large"
            disabled={!isSignup && loading}
          >
            Најави се
          </Button>
          {!isSignup && loading && (
            <CircularProgress
              className={classes.circularProgress}
              color="primary"
            ></CircularProgress>
          )}
        </div>
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
          onClick={() => {
            setOpenRegistrationDialog(true);
            setIsSignup(true);
          }}
          fullWidth
          size="large"
        >
          Регистрирај се
        </Button>
      </Paper>
      {openRegistrationDialog && (
        <RegistrationDialog
          onSubmit={(registrationEmail, registrationPassword) => {
            handleSubmit(registrationEmail, registrationPassword);
            setIsSignup(false);
          }}
          onClose={() => {
            setOpenRegistrationDialog(false);
            setIsSignup(false);
          }}
        ></RegistrationDialog>
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
