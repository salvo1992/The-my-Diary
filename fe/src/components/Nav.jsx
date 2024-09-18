import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyBill, faPiggyBank, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.navItem}>
        <FontAwesomeIcon icon={faCalendarAlt} className={styles.navIcon} />
        Agenda
      </Link>
      <Link to="/budget" className={styles.navItem}>
        <FontAwesomeIcon icon={faMoneyBill} className={styles.navIcon} />
        Entrate e Spese
      </Link>
      <Link to="/savings" className={styles.navItem}>
        <FontAwesomeIcon icon={faPiggyBank} className={styles.navIcon} />
        Salvadanaio
      </Link>
      <Link to="/long-term-events" className={styles.navItem}>
        <FontAwesomeIcon icon={faCalendarCheck} className={styles.navIcon} />
        Eventi a Lungo Termine
      </Link>
    </nav>
  );
};

export default Nav;
