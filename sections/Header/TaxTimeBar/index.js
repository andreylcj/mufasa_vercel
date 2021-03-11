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

  const [showSubNav, setShowSubNav] = useState(false);
  const [translate, setTranslate] = useState('');

  useEffect(() => {
    if (showSubNav && !query.periodo && months.length > 0) {
      router.push(`/imposto-de-renda?periodo=${months[months.length - 1].title.replace(' ', '-').toLocaleLowerCase()}`);
    }

    if (!oldUser) {
      setTranslate(`translateY(-${realHeight}px)`);
      setShowSubNav(false);
    } else if (pathname.indexOf('/imposto-de-renda') !== -1) {
      setTranslate('translateY(0)');
      setShowSubNav(true);
    } else {
      setTranslate(`translateY(-${realHeight}px)`);
      setShowSubNav(false);
    }
  }, [pathname]);

  const itemHeight = theme.measuresPatterns.timeSelectBar.height.general;
  const itemHeightSubNav = theme.measuresPatterns.subNav.height.general;
  const realHeight = parseFloat(itemHeight.replace('px', '')) + parseFloat(itemHeightSubNav.replace('px', ''));

  const oldUser = false;

  const elementWidth = parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.replace('px', ''));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLeftItems(itemsCount - Math.round((window.innerWidth - elementWidth) / elementWidth));
    }
  }, [typeof window]);

  const leftRealItems = typeof window !== 'undefined' ? itemsCount - Math.round((window.innerWidth - elementWidth) / elementWidth) : 0;

  const [leftItems, setLeftItems] = useState(0);
  const [rightItems, setRightItems] = useState(0);

  useEffect(() => {
    setLeftItems(leftRealItems - rightItems);
  }, [leftRealItems]);
  return (
    <SubHeaderContainer
      style={{
        pointerEvents: showSubNav ? 'intial' : 'none',
        opacity: showSubNav ? '1' : '0',
        transform: translate,
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
      <SubHeaderContainer.UlContain>
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
              index={index}
              href={pathname}
              title={month.title}
              query={itemQuery}
              selectedItem={(month.title.replace(' ', '-').toLocaleLowerCase() === query.periodo)}
              value={value}
            />
          );
        })
      }
          {/* <SubHeaderContainer.ItemBg
            style={{
              width: elementBgWidth,
              left: elementBgLeft,
              borderRadius: '0',
            }}
          /> */}
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
