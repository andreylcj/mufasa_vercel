import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../../assets/utils/GetWindowDimensions';

const SubNavItemContainer = styled.li`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;

.selected{
  font-weight: 700;
}

.no-selected{
  &:hover{
    /*background: ${({ theme }) => theme.colors.mufasaOrange};*/
    background: ${({ theme }) => theme.measuresPatterns.timeSelectBar.background};
    /*box-shadow: 0 0 5px 4px rgba(0 0 0 / 15%);*/
    box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
    box-shadow: #2b1304 0px 3px 5px;
    transform: scale(1.1);
    z-index: 2;
  }
}

a{
  text-decoration: none;
  color: #000;
  font-weight: 400;
  padding: 0 3.5vw; 
  height: calc(100% - 6px);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  min-width: 105px;
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
      <a
        onClick={onClick}
        className={selectedItem ? 'selected' : 'no-selected'}
      >
        {title}
      </a>
    </SubNavItemContainer>
  );
}

export default SubNavItem;
