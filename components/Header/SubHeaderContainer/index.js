import styled from 'styled-components';

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
    overflow-x: auto;
    position: relative;
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

export default SubHeaderContainer;
