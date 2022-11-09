import React, {FormEvent, useState} from "react";
import styles from './App.module.scss'
import {FindCountry, ControlWithButtons} from "./component";

function App() {
    
    const [value, setValue] = useState<string>('');
    const [value1, setValue1] = useState<string>('');
    
    const IsNumberAndAlert = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (Number.isFinite(+value1) && value1 ) {
            alert(value1)
        }
        
    }
    
    const HandleAlert = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(value1){
            alert(value1)
        }
    }
    
    const HandleClear = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setValue('')
    }
    
    const HandleHelloWorld = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setValue('Hello World!')
    }
    
    
    return <div className={styles.App}>
        <ControlWithButtons
            value={value}
            setValue={setValue}
            rightButtons={[
                {text: 'Очистить', callback: HandleClear},
                {text: 'Сказать привет', callback: HandleHelloWorld},
            ]}
        />
        
        <ControlWithButtons
            value={value1}
            setValue={setValue1}
            leftButton={[
                {text: 'Проверить на число', callback: IsNumberAndAlert},
            ]}
            rightButtons={[
                {text: 'Показать', callback: HandleAlert},
            ]}
        />
        <div className={styles.flat}>
            <FindCountry size={3} />
            <FindCountry size={10} />
        </div>
    </div>;
}

export default App;
