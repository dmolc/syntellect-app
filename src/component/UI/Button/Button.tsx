import React from 'react';
import styles from './Button.module.scss';
import {ButtonProps} from "./Button.props";


export const Button = ({children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            
            className={styles.Button}
            {...props}
        >
            {children}
            
        </button>
    );
};