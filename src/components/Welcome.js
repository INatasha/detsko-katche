import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Auth from './Auth/Auth';
import welcomeImg from '../assets/images/kid_playing.jpg';

const useStyles = makeStyles((theme) => ({
  wrapperDiv: {
    padding: theme.spacing(8),
    margin: theme.spacing(8),
  },
  textPrimary: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  image: {
    borderRadius: '10px',
    maxWidth: '700px',
  },
  button: {
    margin: theme.spacing(2),
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.wrapperDiv}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={8}
        direction="row"
      >
        <Grid
          container
          item
          md={7}
          direction="column"
          spacing={2}
          alignItems="center"
        >
          <Grid item xs>
            <Typography variant="h3" align="center" gutterBottom>
              Добредојде во{' '}
              <span className={classes.textPrimary}>Детско Катче</span>!
            </Typography>
          </Grid>
          <Grid item xs>
            <img
              className={classes.image}
              alt="kid playing"
              src={welcomeImg}
              width="100%"
              height="100%"
            ></img>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <Auth></Auth>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
