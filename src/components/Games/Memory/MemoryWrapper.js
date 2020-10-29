import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import * as CONST from '../../../constants';

const useStyles = makeStyles((theme) => ({
  div: {
    margin: theme.spacing(8),
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
  },
  gridItem: {
    padding: theme.spacing(6),
  },
}));
function MemoryWrapper() {
  const [gameTheme, setGameTheme] = useState(null);
  const [currentImg, setCurrentImg] = useState(
    gameTheme ? gameTheme.CARD_DESIGN : null
  );
  const themes = Object.values(CONST.THEMES);
  const showChooseThemeView = gameTheme ? false : true;
  const classes = useStyles();

  function renderChooseThemeView() {
    return (
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
                  theme.LOCKED ? { opacity: 0.5 } : { background: theme.COLOR }
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
    );
  }

  return <div className={classes.div}>{renderChooseThemeView()}</div>;
}
export default MemoryWrapper;
