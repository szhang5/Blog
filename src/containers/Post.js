import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/post.css';
import responsive from '../assets/styles/responsive.css';


const Post = ({ data: { loading, post } }) => {
  if (!loading) {
    return (
      <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
        <div className={styles.landingDiv}>
          <div className={styles.card}>
            <div className={[styles.container, responsive.postContainer].join(' ')}>
              <article className={styles.wrapper}>
                <div className={[styles.post, responsive.post].join(' ')}>
                  <h1 className={responsive.postTitle}>{post.title}</h1>
                  <h4 className={responsive.postDate}>{moment(post.createdAt).format('MMMM Do YYYY, h:mm a')}</h4>
                  <p className={[styles.postContent, responsive.postContent].join(' ')} dangerouslySetInnerHTML={{ __html: post.content }} />
                  <img className={styles.postImg} src={post.image.url} alt="PostImage" />
                </div>
              </article>
            </div>
          </div>
          <Link to="/">
            <button className={styles.btn} type="button">Back</button>
          </Link>
        </div>
      </div>
    );
  }

  return <h2>Loading article...</h2>;
};
const singlePost = gql`
  query singlePost($slug: String!) {
    post( where: {
      slug: $slug
    }){
      createdAt
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

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Post);
