import { SOUNDS } from './sounds';

import AUTUMN_CARD from '../assets/images/seasons/autumn.jpg';
import SPRING_CARD from '../assets/images/seasons/spring.jpg';
import WINTER_CARD from '../assets/images/seasons/winter.jpg';
import SUMMER_CARD from '../assets/images/seasons/summer.jpg';

export const SEASONS = {
  AUTUMN: {
    KEY: 'AUTUMN',
    SOUND: SOUNDS.AUTUMN_SOUND,
    IMAGE: AUTUMN_CARD,
    DISPLAY: 'Есен',
  },
  SPRING: {
    KEY: 'SPRING',
    SOUND: SOUNDS.SPRING_SOUND,
    IMAGE: SPRING_CARD,
    DISPLAY: 'Пролет',
  },
  WINTER: {
    KEY: 'WINTER',
    SOUND: SOUNDS.WINTER_SOUND,
    IMAGE: WINTER_CARD,
    DISPLAY: 'Зима',
  },
  SUMMER: {
    KEY: 'SUMMER',
    SOUND: SOUNDS.SUMMER_SOUND,
    IMAGE: SUMMER_CARD,
    DISPLAY: 'Лето',
  },
};
