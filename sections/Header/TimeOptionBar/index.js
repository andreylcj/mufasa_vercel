import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { timeOptionsNavBar } from '../../../constants';
import SubHeaderContainer from '../../../components/Header/SubHeaderTimeOptionsContainer';
import SubNavItem from '../../../snnipets/Header/TimeOptionBar';
import { theme } from '../../../db.json';

function TimeOptionBar() {
  const router = useRouter();
  const { pathname, query } = router;

  const subNavOptions = timeOptionsNavBar;

  const showSubNav = (pathname.indexOf('/carteira') !== -1);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elementBgLeft, setElementBgLeft] = useState(3);
  const [elementBgWidth, setElementBgWidth] = useState(0);
  const [itemsInfo, setItemsInfo] = useState([]);

  useEffect(() => {
    if (itemsInfo.length === 0) return;
    if (!query.periodo) return;

    let selectedOption = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].query.periodo === query.periodo) {
        selectedOption = itemsInfo[i].elementIndex;
        setSelectedIndex(selectedOption);
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
        width = itemsInfo[i].elementWidth - 4;
        break;
      }
    }

    setElementBgLeft(left);
    setElementBgWidth(width);
  }, [query, itemsInfo]);

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

  const itemHeight = theme.measuresPatterns.timeSelectBar.height.general;
  const itemHeightSubNav = theme.measuresPatterns.subNav.height.general;
  const translateTimeNav = () => {
    let resp;
    if (pathname.indexOf('rentabilidade') !== -1) {
      resp = 'translateY(0)';
    } else if (pathname.indexOf('posicoes') !== -1) {
      resp = `translateY(-${itemHeight})`;
    } else {
      const totalHeight = parseFloat(itemHeight.replace('px', '')) + parseFloat(itemHeightSubNav.replace('px', ''));
      resp = `translateY(-${totalHeight}px)`;
    }
    return resp;
  };

  return (
    <SubHeaderContainer
      style={{
        pointerEvents: showSubNav ? 'inherit' : 'none',
        transform: translateTimeNav(),
      }}
    >
      <ul>
        {
          subNavOptions.map((subNavOption, index) => {
            const subNavId = `timeOptionBar__${index}`;
            return (
              <SubNavItem
                updateParentState={updateItemsInfo}
                index={index}
                key={subNavId}
                href={subNavOption.href}
                title={subNavOption.title}
                selectedItem={(selectedIndex === index)}
                query={subNavOption.query}
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

export default TimeOptionBar;
