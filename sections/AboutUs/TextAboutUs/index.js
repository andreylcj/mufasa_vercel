import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.softPurpleBg};
  min-height: calc(100vh - 80px);
`;

function TextAboutUs() {
  return (
    <Container />
  );
}

export default TextAboutUs;
