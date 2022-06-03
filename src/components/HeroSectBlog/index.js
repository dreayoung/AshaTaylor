import React from 'react';
import {
  HeroContainer,
  Logo,
  Container,
  HeroImg,
  HeroP,
  HeroSec1,
  HeroSec2,
  HeroSec2H,
  LatestBlog,
  Img,
} from './HeroSectBlogElements';
import BlogCards from '../../components/Blogs';

const HeroSectBlog = () => {
  return (
    <>
      <HeroContainer>
        <HeroSec1>
          <Logo src={process.env.PUBLIC_URL + 'glimpse.png'} />
          <Container>
            <HeroP>Lorem, ipsdu ind haans wunf juenfi urbnpm.. /3</HeroP>
            <HeroImg src={process.env.PUBLIC_URL + 'logo.png'} />
          </Container>
        </HeroSec1>
        <HeroSec2H>Latest post..</HeroSec2H>
        <HeroSec2>
          <LatestBlog>Finalizing The Year of Understanding</LatestBlog>
          <Img
            src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="display"
          />
        </HeroSec2>
        <BlogCards />
      </HeroContainer>
    </>
  );
};

export default HeroSectBlog;
