import React, {
  useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { subNavOptions } from '../../../constants';
import SubHeaderContainer from '../../../components/Header/SubHeaderContainer';
import SubNavItem from '../../../snnipets/Header/SubNavWalletOptions';
import { theme } from '../../../db.json';

function SubNavWalletOptions() {
  const router = useRouter();
  const { pathname, query } = router;

  const showSubNav = (pathname.indexOf('/carteira') !== -1);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elementBgLeft, setElementBgLeft] = useState(3);
  const [elementBgWidth, setElementBgWidth] = useState(0);
  const [itemsInfo, setItemsInfo] = useState([]);

  useEffect(() => {
    if (itemsInfo.length === 0) return;

    let selectedOption = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].href === pathname) {
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

  const itemHeight = theme.measuresPatterns.subNav.height.general;
  const translateTimeNav = () => {
    let resp;
    if (pathname.indexOf('carteira') !== -1) {
      resp = 'translateY(0)';
    } else {
      resp = `translateY(-${itemHeight})`;
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
            const subNavId = `subNavOption__${index}`;
            return (
              <SubNavItem
                updateParentState={updateItemsInfo}
                index={index}
                key={subNavId}
                href={subNavOption.href}
                title={subNavOption.title}
                query={subNavOption.query}
                selectedItem={(selectedIndex === index)}
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

export default SubNavWalletOptions;
