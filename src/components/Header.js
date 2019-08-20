import React from 'react';
import styles from './Header.module.css';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.inner}>
        <div className={styles.dnavigation}>
          <Link to="/">Phonebook</Link>
        </div>
        <div className={styles.rightmenu}>
          <GoogleAuth />
        </div>
      </div>
    </div>
  )
}

export default Header;
