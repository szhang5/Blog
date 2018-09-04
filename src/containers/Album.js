import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../components/Header';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/album.css';


const Album = ({ data: { loading, posts } }) => {
  if (!loading) {
    return (
      <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
        <div className={styles.landingDiv}>
          <Header />
          <div className={styles.content}>
            {posts.map(post => (
              <div key={post.id} className={gridStyles.row}>
                <div className={[gridStyles.col, gridStyles['span-1-of-4']].join(' ')}>
                  <article className={styles.rightContent}>
                    <h4>{moment(post.createdAt).format('L')}</h4>
                  </article>
                </div>
                <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
                  <article className={styles.leftContent} key={post.id}>
                    <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <img className={styles.postImg} src={post.image.url} alt="PostImage" />
                    </Link>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <h2>Loading images...</h2>;
};

const Posts = gql`
 query posts {
  posts (where: {
    status: PUBLISHED
  }){
    createdAt
    id
    title
    content
    slug
    image {
      url
    } 
  }
}
`;

Album.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(Posts)(Album);
