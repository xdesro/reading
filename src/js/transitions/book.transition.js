import { Transition } from '@unseenco/taxi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class BookTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    const booksList = from.querySelector('.books');
    const books = from.querySelectorAll('.book-list-item');
    const tl = gsap.timeline({ onComplete: done });

    const booksListIsGrid = booksList.classList.contains('books--grid');
    const booksListStagger = booksListIsGrid
      ? {
          amount: 0.1,
          from: 'start',
          axis: 'y',
          grid: 'auto',
        }
      : 0.1;

    tl.add('start');
    tl.to(
      [...books].filter((book) => ScrollTrigger.isInViewport(book, 0.1, true)),
      {
        x: !booksListIsGrid ? window.innerWidth / 2 : 0,
        y: booksListIsGrid ? '100%' : 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.inOut',
        stagger: booksListStagger,
      },
      'start'
    );
    tl.to(
      '.logo, .footer',
      {
        y: '100%',
        opacity: 0,
        duration: 0.6,
        ease: 'power4.inOut',
      },
      'start'
    );
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    const bookCover = to.querySelector('.book-cover img');
    const bookTitle = to.querySelector('.book-title');
    const bookAuthor = to.querySelector('.author');
    const bookFooterItems = to.querySelectorAll('.stars, .buy-disclaimer, .buy');
    const meta = to.querySelector('.meta');
    const backLink = to.querySelector('.book-nav__return');
    const logo = to.querySelector('.book-nav__logo');

    const tl = gsap.timeline({
      onComplete: done,
      ease: 'power4.inOut',
    });
    tl.add('start');

    const clipAnim = (options) => [
      { ...options, y: '50%', clipPath: 'polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)' },
      { y: '0', clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0 100%)' },
    ];

    tl.from(bookCover, { y: '100%', opacity: 0, duration: 1 }, 'start');
    tl.fromTo(bookTitle, ...clipAnim({ duration: 0.3 }), 'start');
    tl.fromTo(bookAuthor, ...clipAnim({ duration: 0.3 }), 'start+=0.1');
    tl.fromTo(backLink, ...clipAnim({ duration: 0.3 }), 'start+=0.1');
    tl.from(meta, { duration: 0.3, opacity: 0 }, 'start+=0.2');
    tl.fromTo(logo, ...clipAnim({ duration: 0.3 }), 'start+=0.2');
    tl.from(bookFooterItems, { duration: 0.3, opacity: 0 }, 'start+=0.3');
  }
}
