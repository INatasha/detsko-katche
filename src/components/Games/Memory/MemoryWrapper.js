import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
}));

function MemoryWrapper() {
  const classes = useStyles();
  const [gameTheme, setGameTheme] = useState(null);
  const themes = Object.values(CONST.THEMES);

  if (gameTheme) return <Memory gameTheme={gameTheme}></Memory>;

  return (
    <div className={classes.wrapperDiv}>
      <Paper className={classes.paper}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Одбери категорија
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.typography}
            >
              Со избирање на некоја од категориите долу, играта Меморија ќе биде
              со картички од соодветната категорија!
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={4} justify="space-evenly">
            {themes.map((theme) => (
              <Grid key={theme.KEY} item md sm={12} xs={12}>
                <Card
                  style={
                    theme.LOCKED
                      ? { opacity: 0.5 }
                      : { background: theme.COLOR }
                  }
                >
                  <CardActionArea
                    className={classes.cardContent}
                    disabled={theme.LOCKED}
                    onClick={() => {
                      if (!theme.LOCKED) setGameTheme(theme);
                    }}
                  >
                    <Typography variant="h4">{theme.DISPLAY}</Typography>
                  </CardActionArea>
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
