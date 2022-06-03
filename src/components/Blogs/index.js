import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebase-config';
import {
  Container,
  Wrapper,
  Card,
  Title,
  FeatureImg,
} from './BlogCardsElements';

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsCollectionRef = collection(db, 'blogs');

  const q = query(blogsCollectionRef, orderBy('title', 'desc'));
  onSnapshot(q, (snapshot) => {
    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(articles);
  });

  return (
    <Container>
      <Wrapper>
        {blogs.length === 0 ? (
          <p style={{ color: 'black', textAlign: 'center' }}>
            No blogs right now!
          </p>
        ) : (
          blogs.map((blog, idx) => {
            // console.log(blog.image);
            return (
              <Card to={`/blogs/${blog.id}`} key={idx}>
                <Title>{blog.title}</Title>
                <FeatureImg src={require(`${blog.image}`)}/>
              </Card>
            );
          })
        )}
      </Wrapper>
    </Container>
  );
};

export default BlogCards;
