import { useLayoutEffect } from 'react';

import 'Styles/infiniteScroll.css';

const InfiniteScroll = ({ children, direction, speed }) => {
  useLayoutEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      addAnimation(document.querySelectorAll('.scroller'));
  }, []);

  return (
    <div
      className="scroller"
      data-direction={direction || ''}
      data-speed={speed || ''}
    >
      <ul className="scroller__inner">{children}</ul>
    </div>
  );
};

export default InfiniteScroll;

function addAnimation(targetList) {
  targetList.forEach(target => {
    target.setAttribute('data-animated', true);
    const targetInner = target.querySelector(`.scroller__inner`);

    Array.from(targetInner.children).forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);

      targetInner.appendChild(duplicatedItem);
    });
  });
}
