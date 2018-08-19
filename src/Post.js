import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Post = ({ data: { loading, post }}) => {
 if (!loading) {
  return (
   <article className="wrapper">
    <div className="posts">
     <h1>{post.title}</h1>
      <img src={post.image.url} alt="Dogs" />
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
   </article>
  );
 }

 return <h2>Loading article...</h2>
};
const singlePost = gql`
  query singlePost($slug: String!) {
    post( where: {
      slug: $slug
    }){
      id
      slug
      title
      content
      image {
       url
      }
    }
  }
`;
export default graphql(singlePost, {
 options: ({ match }) => ({
  variables: {
   slug: match.params.slug
  }
 })
})(Post);