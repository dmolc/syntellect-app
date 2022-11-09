import React from 'react';
import styles from './Input.module.scss'
import {InputProps} from './Input.props'

export const Input = ({value, ...props}: InputProps): JSX.Element => {
    return (
        <input type="text" value={value} placeholder='Введите текст' className={styles.Input}
             {...props}>
            
        </input>
    );
}