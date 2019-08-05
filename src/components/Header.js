import React from 'react';
import styles from './Header.module.css';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.inner}>
        <div className={styles.dnavigation}>
          Phonebook
        </div>
        <div className={styles.rightmenu}>
          <GoogleAuth />
        </div>
      </div>
    </div>
  )
}

export default Header;
