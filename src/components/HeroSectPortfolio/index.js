import React from 'react';
import {
  Container,
  TopSection,
  NumberTwos,
  NumberTwos2,
  NumberTwos3,
  Text,
  Text2,
  Text3,
} from './PortfolioElements';

function Portfolio({ banner, balloons }) {
  return (
    <Container>
      <TopSection img={banner}>
        <NumberTwos src={balloons} />
        <Text>World Building</Text>
        <NumberTwos2 src={balloons} />
        <Text2>Eternal Liberation</Text2>
        <NumberTwos3 src={balloons} />
        <Text3>The Story</Text3>
      </TopSection>
    </Container>
  );
}

export default Portfolio;
