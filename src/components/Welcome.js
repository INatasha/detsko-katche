import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import Auth from './Auth/Auth';
import welcomeImg from '../assets/images/welcome.jpg';
import { SOUNDS } from '../constants';

const useStyles = makeStyles((theme) => ({
  wrapperDiv: {
    padding: theme.spacing(8),
    margin: theme.spacing(8),
  },
  image: {
    borderRadius: '10px',
    maxWidth: '800px',
  },
  button: {
    margin: theme.spacing(2),
  },
}));

function Welcome() {
  const classes = useStyles();
  const playSound = (audioFile) => {
    audioFile.play();
  };
  useEffect(() => {
    playSound(new Audio(SOUNDS.WELCOME_SOUND));
  }, []);

  return (
    <div className={classes.wrapperDiv}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={6}
        direction="row"
      >
        <Grid item lg={7}>
          <img
            className={classes.image}
            alt="welcome image"
            src={welcomeImg}
            width="100%"
            height="100%"
          ></img>
          <IconButton
            onClick={() => playSound(new Audio(SOUNDS.WELCOME_SOUND))}
          >
            <VolumeUpIcon fontSize="large"></VolumeUpIcon>
          </IconButton>
        </Grid>
        <Grid item lg={5}>
          <Auth></Auth>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
