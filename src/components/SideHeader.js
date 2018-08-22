import React from 'react';
import styles from './styles/header.css';


const SideHeader = () => {
  return (
    <div className={styles.header}>
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />
    </div>
  );
};

export default SideHeader;
