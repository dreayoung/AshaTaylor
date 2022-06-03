import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
//   padding: 10px 0;
  display: flex;
  flex-direction: column;
`;
export const TopSection = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; //cover on desktop
  width: 100%;
  height: 400px;
`;

export const Text = styled.div`
  font-family: Fairleaders;
  letter-spacing: 0.2rem;
  background: transparent;
  position: absolute;
  font-weight: 800;
  font-size: 2rem;
  margin: 5.5rem auto;
  left: 40%;
`;

export const Text2 = styled.div`
  font-family: Fairleaders;
  letter-spacing: 0.2rem;
  background: transparent;
  position: absolute;
  font-weight: 800;
  font-size: 2rem;
  margin: 10rem auto;
  left: 30%;
`;
export const Text3 = styled.div`
  font-family: Fairleaders;
  letter-spacing: 0.2rem;
  background: transparent;
  position: absolute;
  font-weight: 800;
  font-size: 2rem;
  margin: 15rem auto;
  left: 40%;
`;

export const NumberTwos = styled.img`
  position: absolute;
  background: transparent;
  width: 7.5%;
  margin: 4.5rem auto;
  left: 30%;
`;

export const NumberTwos2 = styled.img`
  position: absolute;
  background: transparent;
  width: 7.5%;
  margin: 9rem auto;
  left: 20%;
`;

export const NumberTwos3 = styled.img`
  position: absolute;
  background: transparent;
  width: 7.5%;
  margin: 14rem auto;
  left: 30%;
`;
