import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';

import Image from './Image';

function MemoryCard({ cardCover, imageURL, isFlipped, onClick }) {
  return (
    <CardActionArea onClick={onClick}>
      <Image src={isFlipped ? imageURL : cardCover} />
    </CardActionArea>
  );
}

export default MemoryCard;
