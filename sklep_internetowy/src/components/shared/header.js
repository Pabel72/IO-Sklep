import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import {CartIcon} from '../icons';
import {CartContext} from "../../contexts/CartContext";

const Header = () => {

    const {itemCount} = useContext(CartContext);
    return (
        <header className={styles.header}>
            <Link to='/'>Sklep</Link>
            <Link to='/about'>O nas</Link>
            <Link to='/cart'> <CartIcon/> Koszyk ({itemCount})</Link>
            <Link to='/login'>Logowanie</Link>
            <Link to='/signup'>Rejestracja</Link>
        </header>
    );
}

export default Header;