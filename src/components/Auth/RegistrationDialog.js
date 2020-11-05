import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CommonDialog from '../Shared/CommonDialog';

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginBottom: theme.spacing(2),
  },
}));

function RegistrationDialog({ onSubmit, onClose }) {
  const classes = useStyles();
  const [parentName, setParentName] = useState('');
  const [kidName, setKidName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegistrationBtnDisabled =
    parentName === '' || kidName === '' || email === '' || password === '';

  const title = 'Регистрација';
  const content = (
    <Fragment>
      <TextField
        autoFocus
        required
        autoComplete="off"
        type="text"
        className={classes.textfield}
        fullWidth
        variant="outlined"
        label="Име на родител"
        placeholder="Внеси име на родител"
        onChange={(event) => setParentName(event.target.value)}
        InputLabelProps={{ shrink: true }}
      ></TextField>
      <TextField
        required
        autoComplete="off"
        type="text"
        className={classes.textfield}
        fullWidth
        variant="outlined"
        label="Име на дете"
        placeholder="Внеси име на дете"
        onChange={(event) => setKidName(event.target.value)}
        InputLabelProps={{ shrink: true }}
      ></TextField>
      <TextField
        required
        autoComplete="off"
        type="email"
        className={classes.textfield}
        fullWidth
        variant="outlined"
        label="Електронска адреса на родител"
        placeholder="Внеси електронска адреса на родител"
        onChange={(event) => setEmail(event.target.value)}
        InputLabelProps={{ shrink: true }}
      ></TextField>
      <TextField
        required
        autoComplete="off"
        type="password"
        className={classes.textfield}
        fullWidth
        variant="outlined"
        label="Лозинка"
        placeholder="Внеси лозинка"
        onChange={(event) => setPassword(event.target.value)}
        InputLabelProps={{ shrink: true }}
      ></TextField>
    </Fragment>
  );
  const actions = [
    { name: 'Откажи', onClick: onClose, variant: 'outlined' },
    {
      name: 'Регистрирај се',
      onClick: () => {
        onSubmit(email, password);
        onClose();
      },
      disabled: isRegistrationBtnDisabled,
    },
  ];
  return (
    <CommonDialog
      title={title}
      content={content}
      actions={actions}
      onClose={onClose}
    />
  );
}

export default RegistrationDialog;
