import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useWindowSize from '../../assets/utils/GetWindowDimensions';

const SubHeaderContainer = styled.div`
  background: ${({ theme }) => theme.measuresPatterns.timeSelectBar.background};
  position: fixed;
  left: 0px;
  right: 0px;
  top: calc(${({ theme }) => theme.measuresPatterns.header.height.general}
  + ${({ theme }) => theme.measuresPatterns.subNav.height.general});
  z-index: 4;
  will-change: transform;
  font-weight: 500;
  font-size: 0.875rem;
  height: ${({ theme }) => theme.measuresPatterns.timeSelectBar.height.general};
  border-bottom: 2px solid #333;

  @media screen and (min-width: 1024px){
    top: calc(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024}
  + ${({ theme }) => theme.measuresPatterns.subNav.height.general});
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;

SubHeaderContainer.ItemBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #fff;
  margin: 3px 0;
  border-radius: 3px;
  pointer-events: none;
  transition: all ease-out 0.2s;
  opacity: 0.25;
`;

function TimeOptionBar() {
  const router = useRouter();
  const { pathname, query } = router;

  const subNavOptions = [
    {
      title: 'No mês',
      href: '/carteira',
      query: {
        periodo: 'no-mes',
      },
    },
    {
      title: '6 meses',
      query: {
        periodo: '6-meses',
      },
    },
    {
      title: '12 meses',
      query: {
        periodo: '12-meses',
      },
    },
    {
      title: '2021',
      query: {
        periodo: 'no-ano',
      },
    },
    {
      title: 'Máximo',
      query: {
        periodo: 'maximo',
      },
    },
  ];

  const showSubNav = (pathname === '/carteira');

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elementBgLeft, setElementBgLeft] = useState(3);
  const [elementBgWidth, setElementBgWidth] = useState(0);
  const [itemsInfo, setItemsInfo] = useState([]);

  useEffect(() => {
    if (itemsInfo.length === 0) return;
    if (!query.periodo) return;

    let selectedOption = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].query === query.periodo) {
        selectedOption = itemsInfo[i].elementIndex;
        break;
      }
    }

    let left = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex < selectedOption) {
        left += itemsInfo[i].elementWidth;
      }
    }
    left += 3;
    if (selectedOption === 0) left = 3;

    let width;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex === selectedOption) {
        width = itemsInfo[i].elementWidth - 6;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(width);
  }, [query]);

  /* useEffect(() => {
    if (itemsInfo.length === 0) return;
    let left = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex < selectedIndex) {
        left += itemsInfo[i].elementWidth;
      }
    }
    left += 3;
    if (selectedIndex === 0) left = 3;

    let width;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex === selectedIndex) {
        width = itemsInfo[i].elementWidth - 6;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(width);
  }, [selectedIndex, itemsInfo.length]); */

  const updateItemsInfo = (data) => {
    const check = itemsInfo.filter((item) => {
      const test = (item.elementIndex === data.elementIndex);
      return test;
    });

    if (check.length === 0) {
      setItemsInfo((prevItemsInfo) => ([...prevItemsInfo, data]));
    }
  };

  return (
    <SubHeaderContainer
      style={{
        opacity: showSubNav ? '1' : '0',
        pointerEvents: showSubNav ? 'inherit' : 'none',
      }}
    >
      <ul>
        {
          subNavOptions.map((subNavOption, index) => {
            const subNavId = `suvNavOption__${index}`;
            return (
              <SubNavItem
                background={`${({ theme }) => theme.measuresPatterns.timeSelectBar.background}`}
                updateParentState={updateItemsInfo}
                index={index}
                key={subNavId}
                href={subNavOption.href}
                title={subNavOption.title}
                selectedItem={(selectedIndex === index)}
                query={subNavOption.query.periodo}
                onClick={() => {
                  setSelectedIndex(index);
                  router.push({
                    pathname: subNavOption.href,
                    query: {
                      ...query,
                      ...subNavOption.query,
                    },
                  });
                }}
              />
            );
          })
        }
        <SubHeaderContainer.ItemBg
          style={{
            width: elementBgWidth,
            left: elementBgLeft,
          }}
        />
      </ul>
    </SubHeaderContainer>
  );
}

const SubNavItemContainer = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /*&:after{
    content: '';
    height: 85%;
    width: 2px;
    background-color: #fff;
  }*/

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
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    border-radius: 3px;
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
      <a
        onClick={onClick}
        className={selectedItem ? 'selected' : 'no-selected'}
      >
        {title}
      </a>
    </SubNavItemContainer>
  );
}

export default TimeOptionBar;
