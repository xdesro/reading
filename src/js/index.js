import * as Taxi from '@unseenco/taxi';

import DefaultTransition from './transitions/default';
import BookTransition from './transitions/book.transition';

const taxi = new Taxi.Core({
  transitions: {
    default: DefaultTransition,
    toBook: BookTransition,
  },
});

taxi.addRoute('/', '.*', 'toBook');
