import React, {
  useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { subNavOptions } from '../../../constants';
import SubHeaderContainer from '../../../components/Header/SubHeaderContainer';
import SubNavItem from '../../../snnipets/Header/SubNavWalletOptions';

function SubNavWalletOptions() {
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

export default SubNavWalletOptions;
