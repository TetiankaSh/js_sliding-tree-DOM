'use strict';

document.addEventListener('click', (ev) => {
  // Only react if the click is on a <span> inside a <li>
  if (ev.target.tagName !== 'SPAN') {
    return;
  }

  const li = ev.target.closest('li');

  if (!li) {
    return;
  }

  li.classList.toggle('open');
});
