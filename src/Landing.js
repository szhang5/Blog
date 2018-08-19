import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Landing = ({ data: {loading, posts} }) => {
 if (!loading) {
  return (
   <div className="wrapper">
    {posts.map(post => (
     <article className="content" key={post.id}>
      <h2>{post.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link to={`/post/${post.slug}`}>
       <button className="btn">Read More</button>
      </Link>
     </article>
    ))}
   </div>
  );
 }
 return <h2>Loading posts...</h2>
};
const Posts = gql`
 query posts {
  posts {
   id
   title
   content
   slug
  }
}
`;
export default graphql(Posts)(Landing);