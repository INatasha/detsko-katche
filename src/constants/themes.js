import { SOUNDS } from './sounds';

import NATURE_THEME from '../assets/images/nature.png';
import ANIMALS_THEME from '../assets/images/animals.png';

import MEMORY_CARD_DESIGN_1 from '../assets/images/memory_card_design_1.jpg';
import MEMORY_CARD_DESIGN_2 from '../assets/images/memory_card_design_2.jpg';
import MEMORY_CARD_DESIGN_3 from '../assets/images/memory_card_design_3.jpg';

import LION_CARD from '../assets/images/animals/lavce.jpg';
import MONKEY_CARD from '../assets/images/animals/majmunce.jpg';
import ELEPHANT_CARD from '../assets/images/animals/slonce.jpg';
import TIGER_CARD from '../assets/images/animals/tigar.jpg';
import ZEBRA_CARD from '../assets/images/animals/zebra.jpg';
import GIRAFFE_CARD from '../assets/images/animals/zirafa.jpg';

import MOON_CARD from '../assets/images/nature/mesecina.jpg';
import CLOUD_CARD from '../assets/images/nature/oblak.jpg';
import SUN_CARD from '../assets/images/nature/sonce.jpg';
import RAINBOW_CARD from '../assets/images/nature/vinozito.jpg';
import STAR_CARD from '../assets/images/nature/zvezda.jpg';

export const THEMES = {
  ANIMALS: {
    KEY: 'ANIMALS',
    CARD_DESIGN: MEMORY_CARD_DESIGN_1,
    COLOR: '#BDCAD3',
    DISPLAY: 'Диви животни',
    SOUND: SOUNDS.WILD_ANIMALS_SOUND,
    COVER: ANIMALS_THEME,
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
    SOUND: SOUNDS.NATURE_SOUND,
    COVER: NATURE_THEME,
    CARDS: [MOON_CARD, CLOUD_CARD, SUN_CARD, RAINBOW_CARD, STAR_CARD],
  },
};
