import React from 'react';
import { forEach, map } from 'lodash';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Icon } from 'react-icons-kit';
import { tag } from 'react-icons-kit/typicons/tag';
import Header from '../components/Header';
import Bubble from '../components/Bubble';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/landing.css';
import responsive from '../assets/styles/responsive.css';


const getPostsByMonth = (posts) => {
  const results = {};
  forEach(posts, post => {
    const monthYear = moment(post.createdAt).format('YYYY-MM');
    if (monthYear in results) {
      results[monthYear].push(post);
    } else {_
      results[monthYear] = [post];
    }
  })
  const keys = Object.keys(results).reverse();
  return { keys, results };
};

const Landing = ({ data: { loading, posts } }) => {
  if (!loading) {
    const { keys, results: postsByMonth } = getPostsByMonth(posts);
    return (
      <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
        <div className={styles.landingDiv}>
          <div className={styles.content}>
            {
              map(keys, monthYear => {
                const posts = postsByMonth[monthYear];
                return (
                  <div key={monthYear}>
                    <div className={gridStyles.row}>
                      <div className={[gridStyles.col, gridStyles['span-1-of-12']].join(' ')} />
                      <div className={[gridStyles.col, gridStyles['span-11-of-12']].join(' ')}>
                        <div className={[styles.date, responsive.date].join(' ')}>{moment(monthYear).format('MMMM YYYY')}</div>
                      </div> 
                    </div>
                    {
                      map(posts, post => {
                        return (
                          <div className={gridStyles.row} key={post.id}>
                            <div className={[gridStyles.col, gridStyles['span-1-of-4']].join(' ')}>
                              <article className={styles.rightContent}>
                                <h4>{moment(post.createdAt).format('dddd Do')}</h4>
                              </article>
                            </div>
                            <div className={[gridStyles.col, gridStyles['span-3-of-4']].join(' ')}>
                              <article className={[styles.leftContent, responsive.leftContent].join(' ')} key={post.id}>
                                <h2>{post.title}</h2>
                                <div className={styles.socialLinks}>
                                  <div className={styles.logoTag}>
                                  <Link to={`/category/${post.category.name}`}>
                                    <span>{post.category.name}</span>
                                    <Icon size={18} icon={tag} />
                                  </Link>
                                  </div>
                                </div>
                                <p className={[styles.ellipsis, responsive.ellipsis].join(' ')} dangerouslySetInnerHTML={{ __html: post.content }} />
                                <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                                  <button className={styles.btn} type="button">Read More</button>
                                </Link>
                              </article>
                            </div>
                          </div>);
                      })
                    }
                  <br /><br /><br />
                  </div>
                )})
              }
          </div>
        </div>
      </div>
    );
  }

  return <h2>Loading posts...</h2>;
};

const Posts = gql`
 query posts {
  posts ( where: {
    status: PUBLISHED
  }){
   createdAt
   id
   title
   content
   slug
   category{
    name
   }
  }
}
`;

Landing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(Posts)(Landing);
