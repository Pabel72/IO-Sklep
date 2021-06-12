import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <Link to='/'>Sklep</Link>
            <Link to='/about'>O nas</Link>
        </header>
    );
}

export default Header;