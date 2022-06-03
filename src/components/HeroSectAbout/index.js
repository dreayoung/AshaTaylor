import React, { useState, useEffect } from 'react';
import {
  HeroContainer,
  HeroImg,
  HeroH1,
  HeroP,
  HeroH2,
  Video,
  Section2,
  S2heading,
  TopicsContainer
} from './HeroSectElements';
import ReactPlayer from 'react-player'
import { BsYoutube } from 'react-icons/bs';

import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore';

const HeroSectionAbout = () => {
  const [info, setInfo] = useState([]);
  const pageInfoRef = collection(db, 'data');

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(pageInfoRef);
      setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getInfo();
  });

  console.log('infooo', info)

  const introText = info.map((data) => data.text);
  const video = info.map((link) => link.video);
  const heading = info.map((text) => text.heading2)

  return (
    <HeroContainer>
      <HeroImg src={process.env.PUBLIC_URL + 'IMG_0614 4.JPG'} />
      <HeroH1>Hi, i'm Asha !</HeroH1>
      <HeroP>{introText}</HeroP>
      <HeroH2>Who Am I ?</HeroH2>
      <Video>
        <ReactPlayer url={video} width='auto'></ReactPlayer>
      </Video>
      <BsYoutube color="red" size={30} />
      <Section2>
        <S2heading>{heading}</S2heading>
        <TopicsContainer>

        </TopicsContainer>
      </Section2>
    </HeroContainer>
  );
};

export default HeroSectionAbout;
