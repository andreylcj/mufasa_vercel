import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ListNavItem = styled.li`

  padding: 0px 0px 8px;
  text-align: left;

  @media(max-width: 768px){
    font-size: 0.8125rem;
  }
  
  a{
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
  }
  
  a:hover{
    text-decoration: underline;
  }

  i{
    color: #E49447;
  }
  
`;

function ListNav({
  text, href, color, iconClassName, fontSize,
}) {
  return (
    <ListNavItem>
      <Link href={href}>
        <a style={{ color: color || null, fontSize: fontSize || null }}>
          <i className={iconClassName || 'fas fa-chevron-right'} style={{ marginRight: '7px', fontSize: fontSize || null }} />
          {text}
        </a>
      </Link>
    </ListNavItem>
  );
}

export default ListNav;
