const layoutControls = document.querySelectorAll('.layout-controls button');
const booksList = document.querySelector('.books');

layoutControls.forEach((button) => {
  button.addEventListener('click', (e) => {
    const currentActiveButton = document.querySelector('.layout-controls__button--active');
    const currentActiveLayout = currentActiveButton.dataset.layout;

    const newActiveButton = e.currentTarget;
    const newActiveLayout = newActiveButton.dataset.layout;
    currentActiveButton.classList.remove('layout-controls__button--active');

    newActiveButton.classList.add('layout-controls__button--active');

    booksList.classList.remove(`books--${currentActiveLayout}`);
    booksList.classList.add(`books--${newActiveLayout}`);
  });
});

booksList.addEventListener('wheel', (e) => {
  if (e.deltaY < -3) {
    e.preventDefault();
    booksList.scrollLeft -= e.deltaY;
  }
  if (e.deltaY > 3) {
    e.preventDefault();
    booksList.scrollLeft -= e.deltaY;
  }
});
