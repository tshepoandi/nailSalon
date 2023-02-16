import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section `
  height: 80vh;
  background-image: url('nail.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:100px;
`;

const Button = styled.button `
  margin-top: 5rem;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  &:hover {
    color:#fff;
    background-color:#ff00ff;
  }
`;

const Background = styled.div`
`

function Hero() {
    return (

      // <Background>
      <HeroSection>
        <Button>Reserve</Button>
      </HeroSection>
    // <Background/>
    );
}

export default Hero;
