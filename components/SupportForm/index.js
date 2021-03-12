import styled from 'styled-components';

const FormContainer = styled.div`
padding: 10vh 5vw;
max-width: 1160px;
width: 100%;
`;

FormContainer.LeftSide = styled.div`
  width: 33.5%;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px){
    width: 100%;
  }

  p{
    text-align: left;
  }

  img{
    text-align: left;
    margin-bottom: 20px;
    width: 80%;
    border-radius: 5px;

    @media(max-width: 768px){
      display: flex;
      align-self: center;
    }
  }
`;

FormContainer.Bg = styled.div`
background: #fff;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 3vh 5vw;

@media(min-width: 768px){
  padding: 10vh 5vw;
}

border-radius: 10px;
overflow: hidden;
box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
`;

FormContainer.ImgContain = styled.div`
width: 33.5%;
will-change: transform;
transform: perspective(300px) rotateX(0deg) rotateY(0deg);
transition: all 0.2s;
display: none;

@media(min-width: 768px){
  display: initial;
}

img{
  width: 100%;
}

&:hover{
  transform: perspective(300px) rotate(20deg) scale(1.25);
}
`;

FormContainer.Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 768px){
    width: 44%;
  }

  @media(max-width: 768px){
    margin: 30px 0 !important;
  }

span{
  margin-bottom: 40px;
  font-size: 1.5rem;
  color: #333333;
  font-weight: 600;
}

`;

export default FormContainer;
