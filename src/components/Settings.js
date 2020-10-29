import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { DropzoneArea } from 'material-ui-dropzone';

import ColorPicker from './ColorPicker';
import * as CONST from '../constants';

const useStyles = makeStyles((theme) => ({
  wrapperDiv: {
    marginTop: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(6),
  },
  typography: {
    marginBottom: theme.spacing(4),
  },
}));

function Settings() {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  function handleChange(image) {
    setImage(image);
  }

  return (
    <div className={classes.wrapperDiv}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Подесувања
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.typography}
            >
              Тука можеш да прикачиш твоја фотографија или пак да ја промениш
              примарната боја на твојот профил!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={6}
            alignItems="center"
            justify="space-between"
          >
            <Grid item md={6} style={{ width: '100%' }}>
              <DropzoneArea
                onChange={handleChange}
                acceptedFiles={['image/*']}
                dropzoneText={'Прикачи слика тука'}
                filesLimit={1}
                initialFiles={[CONST.DEFAULT_USER_AVATAR]}
                showAlerts={false}
              />
            </Grid>
            <Grid item md={6}>
              <ColorPicker></ColorPicker>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Settings;
