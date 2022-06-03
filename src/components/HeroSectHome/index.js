import React from 'react';
import {
  AboutSection,
  Listed,
  ContactInfo,
  Icon,
  MissionStatement,
  Logo,
  MSinfo,
  LearnMore,
} from './HeroSectHomeElements';
import NavExtension from '../NavExtension/index';

import { MdOutlineMoreHoriz } from 'react-icons/md';

const HeroSectHome = () => {
  return (
    <>
      <AboutSection>
      <svg viewBox="0 0 500 150">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              className="curve"
            />
            <text width="800" height="500">
              <textPath xlinkHref="#curve" style={{fontFamily: 'fadetta', fontSize: '3.5rem'}}>
                About Me Introduction
              </textPath>
            </text>
          </svg>
        <LearnMore to="/about">
          <MdOutlineMoreHoriz color="#874100" size={40} />
        </LearnMore>
        <Listed>What i am?</Listed>
        <Listed>What is the site</Listed>
      </AboutSection>
      <MissionStatement>
        <Logo src={process.env.PUBLIC_URL + 'logo.png'} />
        <MSinfo>
          Welcome to AshaTaylor.com! This is a platform that I have made to
          liberate myself through writing and art. It is a portfolio, a creative
          space, and an outlet for me to display my truest self to the world
        </MSinfo>
      </MissionStatement>
      <NavExtension />
      <ContactInfo>
        <Icon src={process.env.PUBLIC_URL + 'icons8-instagram (1).svg'} />
        <Icon src={process.env.PUBLIC_URL + 'icons8-youtube-logo.svg'} />
        <Icon src={process.env.PUBLIC_URL + 'icons8-mail.svg'} />
      </ContactInfo>
    </>
  );
};

export default HeroSectHome;
