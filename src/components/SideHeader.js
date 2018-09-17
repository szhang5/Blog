import React from 'react';
import styles from './styles/header.css';
import { Link } from 'react-router-dom';
import responsive from '../assets/styles/responsive.css';


const SideHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src="/images/logo_black.png" alt="Logo" className={[styles.logo, responsive.logo].join(' ')} />
      </Link>
    </div>
  );
};

export default SideHeader;
