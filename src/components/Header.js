import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.dnavigation}>
        Phonebook
      </div>
    </div>
  )
}

export default Header;
