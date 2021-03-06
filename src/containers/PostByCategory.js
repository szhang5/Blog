import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import moment from 'moment';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { tag } from 'react-icons-kit/typicons/tag';
import Header from '../components/Header';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/category.css';


const PostByCategory = ({ data: { loading, category } }) => {
  if (!loading) {
    const { posts } = category;
    return (
      <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
        <div className={styles.landingDiv}>
          <div className={styles.content}>
            {posts.map(post => (
              <div className={gridStyles.row} key={post.id}>
                <div className={[gridStyles.col, gridStyles['span-1-of-4']].join(' ')}>
                  <article className={styles.rightContent}>
                    <h4>{moment(post.createdAt).format('L')}</h4>
                  </article>
                </div>
                <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
                  <article className={styles.leftContent} key={post.id}>
                    <h2>{post.title}</h2>
                    <div className={styles.socialLinks}>
                      <div className={styles.logoTag}>
                        <span>{category.name}</span>
                        <Icon size={18} icon={tag} />
                      </div>
                    </div>
                    <p className={styles.ellipsis} dangerouslySetInnerHTML={{ __html: post.content }} />
                    <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <button className={styles.btn} type="button">Read More</button>
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

  return <h2>Loading posts...</h2>;
};

const Posts = gql`
   query posts($name: String!) {
    category ( where: {
      name: $name
    }){
      name
      posts{
        createdAt
        id
        title
        content
        slug
      }
    }
  }
`;

PostByCategory.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(Posts, {
  options: ({ match }) => ({
    variables: {
      name: match.params.name
    }
  })
})(PostByCategory);
