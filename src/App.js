import React from 'react'
import styled from 'styled-components'
import ProgressStrips from './ProgressBar';

const App = () => {
  return (
    <div className="App">
      <Heading>Progress Stepper</Heading>
        <ProgressStrips />
    </div>
  );
}

const Heading = styled.h1`
  font-size: 2rem;
  color: #CCCCFF;
  padding: 20px;
`;
export default App