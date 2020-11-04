import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import CommonDialog from '../Shared/CommonDialog';
import * as CONST from '../../constants';
import * as actions from '../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  textfield: {
    padding: theme.spacing(2),
  },
}));

function ParentAuth({ onClose, password, dispatch }) {
  const classes = useStyles();
  const [enteredPassword, setEnteredPassword] = useState('');
  console.log({ enteredPassword, password });

  useEffect(() => {
    if (enteredPassword === password) {
      dispatch(actions.updateMode(CONST.MODES.PARENT));
      onClose();
    }
  }, [enteredPassword]);

  const content = (
    <TextField
      className={classes.textfield}
      autoComplete="off"
      type="password"
      fullWidth
      variant="outlined"
      label="Лозинка"
      placeholder="Внеси лозинка"
      onChange={(event) => setEnteredPassword(event.target.value)}
      InputLabelProps={{ shrink: true }}
    ></TextField>
  );

  return <CommonDialog onClose={onClose} content={content}></CommonDialog>;
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = (state) => {
  return {
    password: state.auth.password || '',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentAuth);
