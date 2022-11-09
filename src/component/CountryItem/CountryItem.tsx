import type {FC} from "react";
import styles from "./CountryItem.module.scss";
import {CountryItemProps} from "./CountryItem.props";




export const CountryItem: FC<CountryItemProps> = ({
                                                        name,
                                                        fullName,
                                                        flag,
                                                        setNewValue,
                                                    }) => (
    <div className={styles.card}>
        <img className={styles.img} src={flag} alt="flag"/>
        <option
            onClick={() =>
            setNewValue(`${name}, ${fullName}`)}
            value="name">
            {name}, {fullName}
        </option>
    </div>
);
