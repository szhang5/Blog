import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/header.css';
import gridStyles from '../assets/styles/grid.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={gridStyles.row}>
        <div className={[gridStyles.col, gridStyles['span-1-of-3'], styles.spanLinkWrapper].join(' ')}>
          <div className={styles.spanLink}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span>Blog</span>
            </Link>
          </div>
        </div>
        <div className={[gridStyles.col, gridStyles['span-1-of-3'], styles.spanLinkWrapper].join(' ')}>
          <div className={styles.spanLink}>
            <Link to="/album" style={{ textDecoration: 'none' }}>
              <span>Album</span>
            </Link>
          </div>
        </div>
        <div className={[gridStyles.col, gridStyles['span-1-of-3'], styles.spanLinkWrapper].join(' ')}>
          <div className={styles.spanLink}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
