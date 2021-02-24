import React from 'react';
import styled from 'styled-components';
import SupportForm from '../../sections/SupportForm';
import SectionTitle from '../../snnipets/SectionTitle';

const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrayBg}
`;

function Contato() {
  return (
    <SupportContainer>
      <SectionTitle>
        Como podemos ajudar?
      </SectionTitle>
      <SupportForm />
    </SupportContainer>
  );
}

export default Contato;
