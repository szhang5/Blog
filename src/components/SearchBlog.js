import React from 'react';
import styles from './styles/searchBlog.css';

const SearchBlog = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchDiv}>
        Search
      </div>
      <div className={styles.searchBox}>
        <input type="text" />
      </div>
    </div>
  );
};

export default SearchBlog;
