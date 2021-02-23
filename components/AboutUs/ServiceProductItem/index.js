import React from 'react';
import styled from 'styled-components';

const itemHeight = 225;

const ItemContainer = styled.div`
  /*box-shadow: #2b1304 0px 16px 24px;
  box-shadow: 0 4px 4px -2px #232323;
    -moz-box-shadow: 0 4px 4px -2px #232323;
    -webkit-box-shadow: 0 8px 8px -4px #232323;
  transition: all 0.3s;*/
  position: relative;
  cursor: pointer;
  
  @media(min-width: 768px){
    max-width: 300px;
    &:nth-child(2){
      margin: 0 30px;
    }
  }

  @media(min-width: 1024px){
    max-width: 350px;
  }
  
  .face{
    /*width: 300px;*/
    height: ${itemHeight}px;
    transition: 0.5s;
  }

  .face.face1{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(${itemHeight / 2}px);
  }

  &:hover {
    .face.face1{
      background: ${({ theme }) => theme.colors.mufasaOrange};
      transform: translateY(0);
    }

    .face.face1 .content{
      opacity: 1;
    }

    .face.face2{
      transform: translateY(0);
    }

    .face.face1 .content h3{
      color: #fff;
    }

  }
  
  .face.face1 .content{
    opacity: 0.65;
    transition: 0.5s;
  }  

  .face.face1 .content img{
    max-width: 100px;
  }

  .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #000;
    text-align: center;
    font-size: 1.5em;
  }

  .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    box-shadow: 0 10px 20px rgb(0 0 0 / 50%);
    transform: translateY(-${itemHeight / 2}px);
  }
.face.face2 .content p{
    margin: 0;
    padding: 0;
}

.face.face2 .content a{
    margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
}

.face.face2 .content a:hover{
    background: #333;
    color: #fff;
}

p{
  /*text-align: justify;*/
}
`;

function ServiceProductItem({ item }) {
  return (
    <ItemContainer>
      <div className="face face1">
        <div className="content">
          <img src={item.srcIcon} alt={item.alt} />
          <h3>
            {item.title}
          </h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            {item.desc1}
            {' '}
            <strong>
              {item.strong}
            </strong>
            {' '}
            {item.desc2}
          </p>
          <a href="#">Saiba mais</a>
        </div>
      </div>
    </ItemContainer>
  );
}

export default ServiceProductItem;
