import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const InfoSec = styled.div`
//   color: #fff;
//   padding: 160px 0;
//   background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
// `;

export const AboutSection = styled.div`
background: #ffff;
  margin: 2rem;
  padding: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  background: #ffff;
  text-align: center;
  // opacity: 70%;
  border-radius: 1rem;
`;

export const LearnMore = styled(Link)`
  // border-bottom: 1px solid #874100;
  // border-radius: 75%;
  background: #ffff;
  text-decoration: none;
  padding-bottom: 8px;
  font-size: 1rem;
  color: #874100;
`;

export const Listed = styled.div`
background: #ffff;
  color: #874100;
  font-family: 'Fairleaders';
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  padding-top: 45px;
  text-align: center;
`;
export const ContactInfo = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Icon = styled.img`
  width: 10%;
  margin-right: 30px;
`;

export const MissionStatement = styled.div`
background: #ffff;
  padding: 10px 25px;
  display: flex;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    // border-radius: 1rem;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    margin: 2rem;
  }
`;
export const Logo = styled.img`
box-shadow: 0px 6px 5px #874100;
border-radius: 70%;
  max-width: 25%;
  transform:translate(-50%,-50%);
  animation: rotation infinite 8s linear;

  @keyframes rotation{
    from{
      transform:rotate(0deg);
    }
    
    to{
      transform:rotate(360deg);
    }

   
`;
export const MSinfo = styled.div`
background: #ffff;
  text-align: center;
  // font-family: 'Luckiest Guy';
  color: silver;
  // font-family: 'Fadetta';
  padding: 50px;
  font-size: 1.5rem;
`;
