import styled from 'styled-components';

const FormContainer = styled.div`
padding: 10vh 5vw;
max-width: 1160px;
width: 100%;
`;

FormContainer.Bg = styled.div`
background: #fff;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
width: 100%;
height: 600px;

border-radius: 10px;
overflow: hidden;
padding: 10vh 5vw;
box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
`;

FormContainer.ImgContain = styled.div`
width: 33.5%;
will-change: transform;
transform: perspective(300px) rotateX(0deg) rotateY(0deg);
transition: all 0.2s;

&:hover{
  transform: perspective(300px) rotate(20deg) scale(1.25);
}
`;

FormContainer.Form = styled.form`
  width: 44%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

span{
  margin-bottom: 40px;
  font-size: 1.5rem;
  color: #333333;
  font-weight: 600;
}
`;

export default FormContainer;
