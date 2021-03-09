import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useWindowSize from '../../../../assets/utils/GetWindowDimensions';

const SubNavItemContainer = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.selected{
  font-weight: 700;

  h5{
    font-weight: 700;
  }
}

.no-selected{
  &:hover{
    /*background: ${({ theme }) => theme.colors.mufasaOrange};*/
    background: ${({ theme }) => theme.measuresPatterns.subNav.background};
    /*box-shadow: 0 0 5px 4px rgba(0 0 0 / 15%);*/
    box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
    box-shadow: #2b1304 0px 3px 5px;
    transform: scale(1.1);
    z-index: 2;
  }
}

a{
  text-decoration: none;
  color: white;
  font-weight: 400;
  height: 100%;
  margin: 0;
  position: relative;
  cursor: pointer;
  min-width: ${({ theme }) => theme.measuresPatterns.taxTimeBar.elementWidth.general};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  width: 100%;

  @media(min-width: 1024px){
    min-width: ${({ theme }) => theme.measuresPatterns.taxTimeBar.elementWidth.minWidth1024};
  }

  &:hover{
    color: white;
  }
  
}
`;

function SubNavItem({
  href, title, selectedItem, index, updateParentState, query, value
}) {
  const [width, height] = useWindowSize();

  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    updateParentState(
      {
        elementWidth: ref.current ? ref.current.offsetWidth : 0,
        elementIndex: index,
        query,
      },
    );
  }, [ref.current, width]);

  const stringQuery = () => {
    let resp = '';
    const keys = Object.keys(query);
    for (let i = 0; i < Object.keys(query).length; i++) {
      resp += `${keys[i]}=${query[keys[i]]}`;
    }
    return resp;
  };

  return (
    <SubNavItemContainer
      ref={ref}
    >
      <Link href={`${href}${stringQuery() ? `?${stringQuery()}` : ''}`}>
        <a
          className={selectedItem ? 'selected' : 'no-selected'}
        >
          <h5>
            {title}
          </h5>
          <small>
            {value}
          </small>
        </a>

      </Link>
    </SubNavItemContainer>
  );
}

export default SubNavItem;
