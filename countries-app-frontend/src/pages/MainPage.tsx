import {FC, useState} from "react";
import {ValidationForm} from "../components/ValidationForm";
import {CountryList} from "../components/CountryList";
import {ErrorObject} from "../model/ErrorObject";

export const MainPage: FC = () => {
    const [errorObject, setErrorObject] = useState<ErrorObject>({internal: false, numberError: false, continentError: false});
    const [clickedButton, setClickedButton] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [continent, setContinent] = useState<String>('');
    const [number, setNumber] = useState<string>('');

    return (
        <>
            <ValidationForm errorObject={errorObject} setErrorObject={setErrorObject}
                            clickedButton={clickedButton} setClickedButton={setClickedButton}
                            loading={loading} continent={continent} setContinent={setContinent}
                            number={number} setNumber={setNumber}
            />
            <CountryList  errorObject={errorObject} setErrorObject={setErrorObject}
                          clickedButton={clickedButton}
                          loading={loading} setLoading={setLoading}
                          continent={continent} number={number}
            />
        </>
    )
}