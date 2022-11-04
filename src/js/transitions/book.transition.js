import { Transition } from '@unseenco/taxi';

export default class BookTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    done();
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    const title = to.querySelector('.book-title').innerText;
    console.log(`going to book ${title}`);
    // console.log(to);

    done();
  }
}
