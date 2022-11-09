import {observer} from "mobx-react-lite";
import type {FC} from "react";
import {ChangeEventHandler, useContext, useState} from "react";
import {useDebounce} from "../../hooks";
import {StoreContext} from "../../store/store.context";
import {Countries} from "../../store/FindCountry.store";
import styles from "./FindCountry.module.scss";
import {Input} from "../UI/Input/Input";
import {CountryItem} from "../CountryItem/CountryItem";
import {FindCountryProps} from "./FindCountry.props";


export const FindCountry: FC<FindCountryProps> = observer(
    ({size}) => {
        const [value, setValue] = useState("");
        const {FindCountryStoreStore} = useContext(StoreContext);
        const [countries, setCountries] = useState<Countries[]>([]);
        const {getCountries} = FindCountryStoreStore;
        
        const showCountries = useDebounce(
            async (value: string, maxNumber?: number) => {
                const countries = await getCountries(value, maxNumber);
                setCountries(countries);
            }
        );
        
        const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            setValue(e.target.value);
            showCountries(e.target.value, size);
        };
        
        const setNewValue = (str: string) => {
            setValue(str);
            showCountries(str, size);
        };
        const [isFocus, setIsFocus] = useState<boolean>(true);
        return (
            <div className={styles.wrapper}
                 onMouseLeave={() => setIsFocus(false)}>
                <Input value={value}
                       onMouseEnter={() => setIsFocus(true)}
                       onChange={(e) => onChange(e)}/>
                {isFocus
                    && countries.map(({name, fullName, flag}) => (
                        <CountryItem name={name}
                                     fullName={fullName}
                                     flag={flag}
                                     setNewValue={setNewValue}
                        ></CountryItem>
                    ))}
            </div>
        );
    }
);
