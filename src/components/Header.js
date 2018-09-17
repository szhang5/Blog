import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/header.css';
import responsive from '../assets/styles/responsive.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={[styles.gridContainer,responsive.gridContainer].join(' ')}>
        <div className={styles.spanLinkWrapper}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={[styles.spanLink, responsive.spanLink].join(' ')}>
            Blog
            </div>
          </Link>
        </div>
        <div className={styles.spanLinkWrapper}>
          <Link to="/pofolio" style={{ textDecoration: 'none' }}>
            <div className={[styles.spanLink, responsive.spanLink].join(' ')}>
              Pofolio
            </div>
          </Link>
        </div>
        <div className={styles.spanLinkWrapper}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className={[styles.spanLink, responsive.spanLink].join(' ')}>
                About
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
