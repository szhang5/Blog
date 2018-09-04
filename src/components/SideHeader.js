import React from 'react';
import styles from './styles/header.css';
import { Link } from 'react-router-dom';


const SideHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      </Link>
    </div>
  );
};

export default SideHeader;
