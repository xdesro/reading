import { Transition } from '@unseenco/taxi';
import gsap from 'gsap';

export default class HomeTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    const bookCover = from.querySelector('.book-cover img');
    const allItems = from.querySelectorAll('.book-nav, .book-title, .author, .stars, .meta, .buy, .buy-disclaimer');

    const tl = gsap.timeline({ onComplete: done });
    tl.add('start');

    tl.to(bookCover, { y: '100%', opacity: 0, duration: 0.3 }, 'start');
    tl.to(allItems, { opacity: 0, duration: 0.5 }, 'start');
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    const bookItems = document.querySelectorAll('.book-list-item');
    const allItems = document.querySelectorAll('.logo, .footer');
    const tl = gsap.timeline({ onComplete: done });

    tl.set(bookItems, { pointerEvents: 'none' });
    tl.from(
      bookItems,
      {
        y: '50%',
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        clearProps: true,
      },
      'start'
    );
    tl.from(
      allItems,
      {
        opacity: 0,
        duration: 0.5,
      },
      'start+=.1'
    );
  }
}
