import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import Image from './Image';

const useStyles = makeStyles((theme) => ({
  cardActionArea: {
    width: '250px',
    height: '250px',
    display: 'inline',
  },
  image: { width: '100%', height: '100%' },
}));

function MemoryCard({ xl = 12, cardCover, imageURL, isFlipped, onClick }) {
  const classes = useStyles();
  return (
    <Grid item xl={xl}>
      <CardActionArea className={classes.cardActionArea} onClick={onClick}>
        <Image
          src={isFlipped ? cardCover : imageURL}
          className={classes.image}
        />
      </CardActionArea>
    </Grid>
  );
}

export default MemoryCard;
