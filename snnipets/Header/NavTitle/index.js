import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import useWindowSize from '../../../assets/utils/GetWindowDimensions';

function NavTitle({
  title, href, pathname, index, updateParentState, onClick, item, query,
}) {
  const [width, height] = useWindowSize();

  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    updateParentState(
      {
        elementWidth: ref.current ? ref.current.offsetWidth : 0,
        elementIndex: index,
        href,
        query: item.query.scroll === '' ? { scroll: '' } : {},
      },
    );
  }, [ref.current, width, query]);

  const destUrl = `${href}${(item.query.scroll === '') ? '?scroll' : ''}${item.scroll || ''}`;
  const selected = () => {
    let resp = false;

    if (pathname === href
      && Object.keys(item.query).length === Object.keys(query).length) {
      resp = true;
    } else if (pathname.indexOf('/carteira') !== -1) {
      if (href.indexOf('/carteira') !== -1) {
        resp = true;
      }
    }

    return resp;
  };

  return (
    <li
      className={`${selected() ? 'selected-nav-li' : ''}`}
      ref={ref}
    >
      <Link href={destUrl}>
        <a
          className={`${selected() ? 'selected-nav-a' : ''}`}
          onClick={onClick}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
export default NavTitle;
