import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import * as CONST from '../../constants';

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
  cardContent: {
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  media: {
    height: 350,
  },
}));

function Seasons() {
  const classes = useStyles();
  const seasons = Object.values(CONST.SEASONS);
  return (
    <div className={classes.wrapperDiv}>
      <Paper className={classes.paper}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Годишни времиња
              <IconButton
                onClick={() => {
                  const seasonsSound = new Audio(CONST.SOUNDS.SEASONS_SOUND);
                  seasonsSound.play();
                }}
              >
                <VolumeUpIcon fontSize="large"></VolumeUpIcon>
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={4} justify="space-evenly">
            {seasons.map((season) => (
              <Grid key={season.KEY} item md sm={12} xs={12}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={season.IMAGE}
                    title={season.DISPLAY}
                  />
                  <CardActions>
                    <Typography variant="h5">
                      {season.DISPLAY}
                      <IconButton
                        onClick={() => {
                          const cardAudio = new Audio(season.SOUND);
                          cardAudio.play();
                        }}
                      >
                        <VolumeUpIcon fontSize="large"></VolumeUpIcon>
                      </IconButton>
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default Seasons;
