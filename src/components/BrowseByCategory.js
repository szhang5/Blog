import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './styles/browseByCategory.css';
import responsive from '../assets/styles/responsive.css';


const BrowseByCategory = ({ data: { loading, categories } }) => {
  if (!loading) {
    return (
      <div className={[styles.category, responsive.browseByCategory].join(' ')}>
        <div className={styles.categoryDiv}>
          Browse By Category
        </div>
        <div className={styles.categoryList}>
          {categories.map(category => (
            <Link key={category.name} to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
              <p dangerouslySetInnerHTML={{ __html: category.name }} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return <h2>loading categories...</h2>;
};

const Categories = gql`
 query categories {
  categories (where: {
    status: PUBLISHED
  }){
   name
   posts{
      slug
    }
  }
}
`;

BrowseByCategory.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(Categories)(BrowseByCategory);
