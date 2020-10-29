import MEMORY_CARD_DESIGN_1 from '../assets/images/memory_card_design_1.jpg';
import MEMORY_CARD_DESIGN_2 from '../assets/images/memory_card_design_2.jpg';
import MEMORY_CARD_DESIGN_3 from '../assets/images/memory_card_design_3.jpg';

import LION_CARD from '../assets/images/animals/lavce.jpg';
import MONKEY_CARD from '../assets/images/animals/majmunce.jpg';
import ELEPHANT_CARD from '../assets/images/animals/slonce.jpg';
import TIGER_CARD from '../assets/images/animals/tigar.jpg';
import ZEBRA_CARD from '../assets/images/animals/zebra.jpg';
import GIRAFFE_CARD from '../assets/images/animals/zirafa.jpg';

export const THEMES = {
  ANIMALS: {
    KEY: 'ANIMALS',
    CARD_DESIGN: MEMORY_CARD_DESIGN_1,
    COLOR: '#BDCAD3',
    DISPLAY: 'Животни',
    CARDS: [
      LION_CARD,
      MONKEY_CARD,
      ELEPHANT_CARD,
      TIGER_CARD,
      ZEBRA_CARD,
      GIRAFFE_CARD,
    ],
  },
  NATURE: {
    KEY: 'NATURE',
    CARD_DESIGN: MEMORY_CARD_DESIGN_2,
    COLOR: '#ECDDD6',
    DISPLAY: 'Природа',
  },
  COMING_SOON: {
    KEY: 'COMING_SOON',
    CARD_DESIGN: MEMORY_CARD_DESIGN_3,
    DISPLAY: 'Наскоро нова тема...',
    LOCKED: true,
  },
};
