import {FC} from "react";
import {ValidationForm} from "../components/ValidationForm";
import {CountryList} from "../components/CountryList";

export const MainPage: FC = () => {
    return (
        <>
            <ValidationForm/>
            <CountryList/>
        </>
    )
}