import preloader from '../../assets/images/spinner-solid.svg';
import styles from '../Users/users.module.css';
import React from 'react';

let Preloader = (props) => {
    return <img src={preloader} className={styles.preloader}/>
}

export default Preloader