import React, {
  useState, useRef, useEffect,
} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useWindowSize from '../../assets/utils/GetWindowDimensions';

const SubHeaderContainer = styled.div`
  background: ${({ theme }) => theme.measuresPatterns.subNav.background};
  position: fixed;
  left: 0px;
  right: 0px;
  top: ${({ theme }) => theme.measuresPatterns.header.height.general};
  z-index: 5;
  will-change: transform;
  font-weight: 500;
  font-size: 1rem;
  height: ${({ theme }) => theme.measuresPatterns.subNav.height.general};
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;

  @media screen and (min-width: 1024px){
    top:  ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024};
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

function SubNavWalletOptions() {
  const subNavOptions = [
    {
      title: 'Rentabilidade',
      href: '/carteira',
      query: {
        opcao: 'rentabilidade',
      },
    },
    {
      title: 'Posições',
      href: '/carteira',
      query: {
        opcao: 'posicoes',
      },
    },
    {
      title: 'Posições1',
      href: '/carteira',
      query: {
        opcao: 'posicoes1',
      },
    },
    {
      title: 'Posições2',
      href: '/carteira',
      query: {
        opcao: 'posicoes2',
      },
    },
    {
      title: 'Posições3',
      href: '/carteira',
      query: {
        opcao: 'posicoes3',
      },
    },

  ];

  const router = useRouter();
  const { pathname, query } = router;

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
      if (itemsInfo[i].query === query.opcao) {
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

    let widthTemp;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex === selectedOption) {
        widthTemp = itemsInfo[i].elementWidth - 8;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(widthTemp);
  }, [query, itemsInfo]);

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
        width = itemsInfo[i].elementWidth - 8;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(width);
  }, [selectedIndex, itemsInfo]); */

  const updateItemsInfo = (data) => {
    setItemsInfo((prevItemsInfo) => {
      let indexToExclude = -1;
      for (let i = 0; i < prevItemsInfo.length; i++) {
        if ((prevItemsInfo[i].elementIndex === data.elementIndex)) {
          indexToExclude = i;
          break;
        }
      }

      let newArray = prevItemsInfo.slice();
      if (indexToExclude >= 0) {
        newArray = [...newArray.slice(0, indexToExclude),
          ...newArray.slice(indexToExclude + 1, newArray.length)];
      }
      return ([...newArray, data]);
    });
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
            const subNavId = `subNavOption__${index}`;
            return (
              <SubNavItem
                updateParentState={updateItemsInfo}
                index={index}
                key={subNavId}
                href={subNavOption.href}
                title={subNavOption.title}
                query={subNavOption.query.opcao}
                selectedItem={(selectedIndex === index)}
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

export default SubNavWalletOptions;
