import React from 'react';
import Li from './Li';
import styled from 'styled-components';

const PostsPageUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  justify-items: center;
  grid-column-gap: 4%;
  grid-row-gap: 4%;
  max-width: 1200px;
  margin: 30px auto;
  height: max-content;
`;

const Ul = ({ post }) => {
  return (
    <>
      <PostsPageUl>
        {post.map((item) => {
          return <Li key={item.id} item={item} />;
        })}
      </PostsPageUl>
    </>
  );
};

export default Ul;
