import { Transition } from '@unseenco/taxi';
import gsap from 'gsap';

export default class BookTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    const tl = gsap.timeline({ onComplete: done });
    tl.add('start');
    tl.to(
      '.book-list-item',
      {
        x: window.innerWidth / 2,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.inOut',
        stagger: 0.1,
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
    console.log('entered');
    const bookCover = to.querySelector('.book-cover img');
    console.log(bookCover);
    const tl = gsap.timeline({
      onComplete: done,
    });
    tl.add('start');
    const title = to.querySelector('.book-title').innerText;
    // console.log(to);

    tl.from(bookCover, { y: '100%', opacity: 0, duration: 1, ease: 'power4.inOut' }, 'start');
  }
}
