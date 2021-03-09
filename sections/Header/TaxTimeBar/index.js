import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SubHeaderContainer from '../../../components/Header/TaxBarTimeMonth';
import { theme } from '../../../db.json';
import SubNavItem from '../../../snnipets/Header/TaxTimeBar/MonthItem';

function TaxTimeBar() {
  const months = [
    {
      title: 'FEV 21',
      tax: 23.12,
    },
    {
      title: 'JAN 21',
      tax: 2.12,
    },
    {
      title: 'DEZ 20',
      tax: 0,
    },
    {
      title: 'NOV 20',
      tax: 0,
    },
    {
      title: 'OUT 20',
      tax: 0,
    },
    {
      title: 'SET 20',
      tax: 23.12,
    },
    {
      title: 'AGO 20',
      tax: 23.12,
    },
    {
      title: 'JUL 20',
      tax: 23.12,
    },
    {
      title: 'JUN 20',
      tax: 23.12,
    },
    {
      title: 'MAI 20',
      tax: 23.12,
    },
    {
      title: 'ABR 20',
      tax: 23.12,
    },
    {
      title: 'MAR 20',
      tax: 23.12,
    },
  ];

  months.reverse();
  const itemsCount = months.length;

  const router = useRouter();
  const { pathname, query } = router;

  const showSubNav = (pathname.indexOf('/imposto-de-renda') !== -1);

  useEffect(() => {
    if (showSubNav && !query.periodo && months.length > 0) {
      router.push(`/imposto-de-renda?periodo=${months[months.length - 1].title.replace(' ', '-').toLocaleLowerCase()}`);
    }
  }, [pathname]);

  const itemHeight = theme.measuresPatterns.timeSelectBar.height.general;
  const itemHeightSubNav = theme.measuresPatterns.subNav.height.general;
  const realHeight = parseFloat(itemHeight.replace('px', '')) + parseFloat(itemHeightSubNav.replace('px', ''));
  const translateTimeNav = () => {
    let resp;
    if (pathname.indexOf('/imposto-de-renda') !== -1) {
      resp = 'translateY(0)';
    } else {
      resp = `translateY(-${realHeight}px)`;
    }
    return resp;
  };

  const elementWidth = parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.minWidth1024.replace('px', ''));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidthScreen(window.innerWidth);
      setLeftItems(itemsCount - Math.round((window.innerWidth - elementWidth) / elementWidth));
    }
  }, [typeof window]);

  const [widthScreen, setWidthScreen] = useState(1000);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elementBgLeft, setElementBgLeft] = useState(3);
  const [elementBgWidth, setElementBgWidth] = useState(0);
  const [leftItems, setLeftItems] = useState(0);
  const [rightItems, setRightItems] = useState(0);
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

    if (selectedOption === 0) left = 0;

    let widthTemp;
    for (let i = 0; i < itemsInfo.length; i++) {
      if (itemsInfo[i].elementIndex === selectedOption) {
        widthTemp = itemsInfo[i].elementWidth;
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
        pointerEvents: showSubNav ? 'inherit' : 'none',
        transform: translateTimeNav(),
      }}
    >
      <SubHeaderContainer.ArrowContain
        disabled={!leftItems}
        className={!leftItems ? 'no-hover' : ''}
        onClick={() => {
          if (leftItems) {
            setRightItems(rightItems + 1);
            setLeftItems(leftItems - 1);
          }
        }}
      >
        <i className="fas fa-angle-double-left" />
      </SubHeaderContainer.ArrowContain>
      <SubHeaderContainer.UlContain
        style={{
          maxWidth: widthScreen > 768 ? Math.round((widthScreen - elementWidth) / elementWidth) * elementWidth : '100%',
        }}
      >
        <SubHeaderContainer.UL
          style={{
            right: `-${rightItems * elementWidth}px`,
          }}
        >
          {
        months.map((month, index) => {
          const monthId = `month__${index}`;
          const value = `R$ ${month.tax.toString().replace('.', ',')}`;
          const itemQuery = {
            periodo: month.title.replace(' ', '-').toLocaleLowerCase(),
          };
          return (
            <SubNavItem
              key={monthId}
              updateParentState={updateItemsInfo}
              index={index}
              href={pathname}
              title={month.title}
              query={itemQuery}
              selectedItem={(selectedIndex === index)}
              value={value}
            />
          );
        })
      }
          <SubHeaderContainer.ItemBg
            style={{
              width: elementBgWidth,
              left: elementBgLeft,
              borderRadius: '0',
            }}
          />
        </SubHeaderContainer.UL>
      </SubHeaderContainer.UlContain>

      <SubHeaderContainer.ArrowContain
        disabled={!rightItems}
        className={!rightItems ? 'no-hover' : ''}
        onClick={() => {
          if (rightItems) {
            setLeftItems(leftItems + 1);
            setRightItems(rightItems - 1);
          }
        }}
      >
        <i className="fas fa-angle-double-right" />
      </SubHeaderContainer.ArrowContain>
    </SubHeaderContainer>
  );
}

export default TaxTimeBar;
