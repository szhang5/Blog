import React from 'react';
import gridStyles from '../assets/styles/grid.css';
import styles from './styles/sidebar.css';
import SideHeader from '../components/SideHeader';
import SearchBlog from '../components/SearchBlog';
import BrowseByCategory from '../components/BrowseByCategory';

const SideBar = () => {
  return (
    <div className={[gridStyles.col, gridStyles['span-1-of-4']].join(' ')}>
      <SideHeader />
      <div className={styles['sidebar-menu']}>
        <SearchBlog />
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default SideBar;
