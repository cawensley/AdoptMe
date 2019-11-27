import React from "react";
import {Link} from '@reach/router';
import {css,keyframes} from 'emotion';

const spin = keyframes`to {transform: rotate(360deg);}`;

const NavBar = () => {
    return (
    <header>
        <Link to="/">Adopt Me!</Link>
        <span className={css`
            font-size: 60px;
            &:hover {animation: 1s ${spin} linear infinite;
          `} role="img" aria-label="logo">🤪</span>
    </header>
    )
};

export default NavBar;