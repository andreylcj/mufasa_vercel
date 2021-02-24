import React from 'react';
import SupportContainer from '../../components/SupportContainer';
import FrequentQuestions from '../../sections/FrequentQuestions';
import SectionTitle from '../../snnipets/SectionTitle';

function Duvidas() {
  return (
    <SupportContainer>
      <SectionTitle>
        Dúvidas?
      </SectionTitle>
      <SupportContainer.QuestionContain
        style={{
          padding: '10vh 10vw',
        }}
      >
        <h3>
          Duvidas frequentes
        </h3>
        <FrequentQuestions />
      </SupportContainer.QuestionContain>
    </SupportContainer>
  );
}

export default Duvidas;
