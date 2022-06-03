import React, { useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase-config';
import {
  Container,
  Logo,
  Title,
  Welcome,
  Date,
  Name,
  Image,
  Author,
  Intro,
  SectionTitle,
  Paragraph,
  Outro,
  Quote,
} from './blogArticleElements';

const BlogArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  const docRef = doc(db, 'blogs', id);

  onSnapshot(docRef, (doc) => {
    setArticle(doc.data(), doc.id);
  });

  return (
    <Container>
      <Date>{article.date}</Date>
      <Name>{article.name}</Name>
      <Welcome>Welcome To</Welcome>
      <Logo src={require('./Untitled_Artwork.png')} />
      <Title>{article.title}</Title>
      <Image src={require('../../components/Blogs/images/Finalizing.png')} />
      <Author></Author>
      {article.introduction ? (
        <>
          <SectionTitle>Introduction</SectionTitle>
          <Intro>{article.introduction}</Intro>
        </>
      ) : null}
      <SectionTitle>{article.paragraph1Title}</SectionTitle>
      <Paragraph>{article.paragraph1}</Paragraph>
      <SectionTitle>{article.paragraph2Title}</SectionTitle>
      <Paragraph>{article.paragraph2}</Paragraph>
      <SectionTitle>{article.paragraph3Title}</SectionTitle>
      <Paragraph>{article.paragraph3}</Paragraph>
      <SectionTitle>{article.paragraph4Title}</SectionTitle>
      <Paragraph>{article.paragraph4}</Paragraph>
      <SectionTitle>{article.paragraph5Title}</SectionTitle>
      <Paragraph>{article.paragraph5}</Paragraph>
      <Outro>{article.outro}</Outro>
      <Quote>{article.quote}</Quote>
      <br></br>
      <Quote>With love,</Quote>
      <Quote>Asha</Quote>
    </Container>
  );
};

export default BlogArticle;
