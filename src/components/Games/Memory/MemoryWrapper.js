import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import Memory from './Memory';
import * as CONST from '../../../constants';

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

function MemoryWrapper() {
  const classes = useStyles();
  const [gameTheme, setGameTheme] = useState(null);
  const themes = Object.values(CONST.THEMES);
  function handleBackButtonClick() {
    setGameTheme(null);
  }
  if (gameTheme)
    return (
      <Memory
        gameTheme={gameTheme}
        handleBackButtonClick={handleBackButtonClick}
      ></Memory>
    );

  return (
    <div className={classes.wrapperDiv}>
      <Paper className={classes.paper}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Одбери категорија{' '}
              <IconButton
                onClick={() => {
                  const chooseCategorySound = new Audio(
                    CONST.SOUNDS.CHOOSE_CATEGORY_SOUND
                  );
                  chooseCategorySound.play();
                }}
              >
                <VolumeUpIcon fontSize="large"></VolumeUpIcon>
              </IconButton>
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.typography}
            >
              Со избирање на некоја од понудените категории, играта Меморија
              може да започне!
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={4} justify="space-evenly">
            {themes.map((theme) => (
              <Grid key={theme.KEY} item md sm={12} xs={12}>
                <Card style={{ background: theme.COLOR }}>
                  <CardActionArea
                    onClick={() => {
                      setGameTheme(theme);
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={theme.COVER}
                      title={theme.DISPLAY}
                    />
                  </CardActionArea>
                  <CardActions>
                    <Typography variant="h5">
                      {theme.DISPLAY}{' '}
                      <IconButton
                        onClick={() => {
                          const cardAudio = new Audio(theme.SOUND);
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
export default MemoryWrapper;
