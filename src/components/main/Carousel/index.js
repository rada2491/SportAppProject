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
    altText: 'Slide 1'
  },
  {
    src: serieA,
    altText: 'Slide 2',
  },
  {
    src: bundes,
    altText: 'Slide 3'
  },
  {
    src: champ,
    altText: 'Slide 4'
  },
  {
    src: premi,
    altText: 'Slide 5'
  }
];

const Carousel = () => <UncontrolledCarousel  className='offset-md-2 col-md-8 carouselImg'  items={items} />;

export default Carousel;
