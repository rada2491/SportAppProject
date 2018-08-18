import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './style.scss';

import bbva from './bbva.png';
import serieA from './Serie-A.png';
import bundes from './bundesliga.png';
import champ from './champions-league.png';
import premi from './pre-lea.png';

const items = [
  {
    src: bbva,
    altText: 'Slide 1',
    caption: ''
  },
  {
    src: serieA,
    altText: 'Slide 2',
    caption: ''
  },
  {
    src: bundes,
    altText: 'Slide 3',
    caption: ''
  },
  {
    src: champ,
    altText: 'Slide 4',
    caption: ''
  },
  {
    src: premi,
    altText: 'Slide 5',
    caption: ''
  }
];

const Carousel = () => <UncontrolledCarousel  className=' col-md-12 carouselImg'  items={items} />;

export default Carousel;
