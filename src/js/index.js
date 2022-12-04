import * as Taxi from '@unseenco/taxi';

import DefaultTransition from './transitions/default';
import BookTransition from './transitions/book.transition';
import HomeTransition from './transitions/home.transition';

const taxi = new Taxi.Core({
  transitions: {
    default: DefaultTransition,
    homeToBook: BookTransition,
    bookToHome: HomeTransition,
  },
});

taxi.addRoute('/', '.*', 'homeToBook');
taxi.addRoute('.*', '/', 'bookToHome');
