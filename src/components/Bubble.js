import React from 'react';
import styles from './styles/bubble.css';

const Bubble = () => {
	return(
		<div className={styles['circle-group']}>
	    <div className={[styles.circle, styles.x1].join(' ')}></div>
	    <div className={[styles.circle, styles.x2].join(' ')}></div>
	    <div className={[styles.circle, styles.x3].join(' ')}></div>
	    <div className={[styles.circle, styles.x4].join(' ')}></div>
	    <div className={[styles.circle, styles.x5].join(' ')}></div>
	    <div className={[styles.circle, styles.x6].join(' ')}></div>
	    <div className={[styles.circle, styles.x7].join(' ')}></div>
	    <div className={[styles.circle, styles.x8].join(' ')}></div>
	    <div className={[styles.circle, styles.x9].join(' ')}></div>
	    <div className={[styles.circle, styles.x10].join(' ')}></div>
	    <div className={[styles.circle, styles.x11].join(' ')}></div>
	    <div className={[styles.circle, styles.x12].join(' ')}></div>
	    <div className={[styles.circle, styles.x13].join(' ')}></div>
	    <div className={[styles.circle, styles.x14].join(' ')}></div>
	    <div className={[styles.circle, styles.x15].join(' ')}></div>
		</div>
	);
};

export default Bubble;

