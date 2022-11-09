import { makeAutoObservable } from "mobx";
import { getCountryByName } from "../api/apiService";

export type Countries = {
    name: string;
    fullName: string;
    flag: string;
};

export class FindCountryStore {
    constructor() {
        makeAutoObservable(this);
    }
    
    getCountries = async (countryPart: string, size?: number) => {
        try {
            const res = await getCountryByName(countryPart);
            
            const uniqCountries = Array.from(
                new Set(res.map((c) => JSON.stringify(c)))
            ).map((c) => JSON.parse(c));
            
            const countries = uniqCountries.slice(0, size);
            
            return [...countries] as Countries[];
        } catch (err) {
            throw err;
        }
    };
}