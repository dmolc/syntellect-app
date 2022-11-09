import { createContext } from "react";
import { FindCountryStore } from "./FindCountry.store";

type StoreContextProps = {
    FindCountryStoreStore: FindCountryStore;
};

const FindCountryStoreStore = new FindCountryStore();

export const StoreContext = createContext<StoreContextProps>({
    FindCountryStoreStore,
});