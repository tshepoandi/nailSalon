import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const Text = styled.div`
  font-size: 3vw;
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Keyword = styled.span`
  color: #ff00ff;
`;

const RotatedText = styled.div`
  font-size: 5vw;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: rotate(-90deg);
  white-space: nowrap;
`;

const TextInMiddleComponent = () => {
  return (
    <Container>
      <Text>
         If you're looking for an exceptional beauty therapist who will leave you feeling pampered and rejuvenated, look no further!

      <Keyword>
         Our beauty therapist is highly skilled and passionate about helping clients look and feel their best.
      </Keyword>

        With years of experience and a deep understanding of the latest techniques and treatments,
      <Keyword>
        she can create a customized beauty plan that will meet your unique needs and preferences.
      </Keyword>
        Whether you're looking for a relaxing facial, a rejuvenating massage, or a stunning new makeup look, our beauty therapist has the skills and expertise to deliver exceptional results. So why not treat yourself to some well-deserved pampering? Book an appointment with our beauty therapist today and experience the ultimate in beauty and relaxation!

      </Text>
    </Container>
  );
};

export default TextInMiddleComponent;
