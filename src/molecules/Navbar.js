import React from "react";
import {Link} from '@reach/router';
import {css,keyframes} from 'emotion';
import colors from '../atoms/colors'

const spin = keyframes`to {transform: rotate(360deg);}`;

const NavBar = () => {
    return (
    <header className={css`
        background-color: ${colors.light};
        padding: 15px;
        `}>
        <Link to="/">Adopt Me!</Link>
        <span className={css`
            font-size: 60px;
            display: inline-block;
            &:hover {
                text-decoration: underline;
                animation: 1s ${spin} linear infinite;
            `} role="img" aria-label="logo">🤪</span>
    </header>
    )
};

export default NavBar;