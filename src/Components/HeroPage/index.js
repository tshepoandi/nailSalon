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
`;

const Button = styled.button `
  margin-top: 20rem;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 3rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
`;

function Hero() {
    return (
    <HeroSection>
        <Button>Reserve</Button>
    </HeroSection>
    );
}

export default Hero;
