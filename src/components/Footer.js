import React from 'react';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import { linkedin } from 'react-icons-kit/icomoon/linkedin';
import { instagram } from 'react-icons-kit/icomoon/instagram';
import styles from './styles/footer.css';
import gridStyles from '../assets/styles/grid.css';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={gridStyles.row}>
        <div className={styles.socialLinks}>
          <li><a href="https://github.com/szhang5" target="_blank"><div className={styles.logoGithub}><Icon size={20} icon={ github } /></div></a></li>
          <li><a href="https://www.facebook.com/shiyunzhang.zoey" target="_blank"><div className={styles.logoFacebook}><Icon size={20} icon={ facebook2 } /></div></a></li>
          <li><a href="https://www.instagram.com/z.shiyun/" target="_blank"><div className={styles.logoInstagram}><Icon size={20} icon={ instagram } /></div></a></li>
          <li><a href="https://www.linkedin.com/in/shiyunzhangzoey" target="_blank"><div className={styles.logoLinkedin}><Icon size={20} icon={ linkedin } /></div></a></li>
        </div>
        <div className={styles.text}>
          <p>
          Copyright © Shiyun Zhang 2018-2019.
            <br />
          This website is a personal blog
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
