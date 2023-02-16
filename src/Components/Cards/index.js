import React from 'react';
import styled from 'styled-components';
// import "nail.jpg" as nail
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  background-color: #000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom:3rem;
`;

const Image = styled.img`
margin-top:50px;
  height: 100%;
  width: 50%;
  object-fit: cover;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  margin-left: 16px;
  border-radius:10px;
  padding-bottom:-1rem;

`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
    padding-top:20px;
  font-size: 12px;
  color:white
`;

const Card = ({ image, title, description }) => {

  return (
    <CardContainer>
      <Image src="nail.jpg" alt={title} />
      <TextContainer>
        <Title>{title}</Title>
        <Description>
        If you're looking for an exceptional beauty therapist who will leave you feeling pampered and rejuvenated, look no further! Our beauty therapist is highly skilled and passionate about helping clients look and feel their best.
        </Description>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
