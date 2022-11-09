import React, {ChangeEvent} from 'react';
import styles from './ControlWithButtons.module.scss'
import {ControlWithButtonsProps} from './ControlWithButtons.props'
import {Input} from "../UI/Input/Input";
import {Button} from "../UI/Button/Button";

export const ControlWithButtons = ({
                                       value,
                                       setValue,
                                       leftButton,
                                       rightButtons,
                                       ...props
                                   }: ControlWithButtonsProps): JSX.Element => {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    
    
    return (
        <form className={styles.ControlWithButtons}
                {...props}>
            
            {leftButton?.map(({text, callback}) => (
                <Button
                    onClick={callback}
                >
                    {text}
                </Button>
            ))}
            
            <Input value={value} onChange={handleChange}></Input>
            
            {rightButtons?.map(({text, callback}) => (
                <Button
                    onClick={callback}
                >
                    {text}
                </Button>
            ))}
        
        </form>
    );
}