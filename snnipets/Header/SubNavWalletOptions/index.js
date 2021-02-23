import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../../assets/utils/GetWindowDimensions';

const SubNavItemContainer = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after{
    content: '';
    height: 85%;
    width: 2px;
    background-color: #fff;
  }

  .selected{
    font-weight: 400;
  }

  .no-selected{
    &:hover{
      /*background: ${({ theme }) => theme.colors.mufasaOrange};*/
      background: linear-gradient(120deg, rgba(227,102,20,1) 0%, rgba(239,151,96,1) 86%, rgba(220,139,86,1) 100%);
      /*box-shadow: 0 0 5px 4px rgba(0 0 0 / 15%);*/
      box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
      box-shadow: #2b1304 0px 3px 5px;
      transform: scale(1.1);
      z-index: 5;
    }
  }

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    padding: 0 3.5vw; 
    height: calc(100% - 6px);
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
  }
`;

function SubNavItem({
  href, title, selectedItem, onClick, index, updateParentState, query,
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

  return (
    <SubNavItemContainer
      ref={ref}
    >
      {/* <Link href={href}> */}
      <a
        onClick={onClick}
        className={selectedItem ? 'selected' : 'no-selected'}
      >
        {title}
      </a>
      {/* </Link> */}
    </SubNavItemContainer>
  );
}

export default SubNavItem;
