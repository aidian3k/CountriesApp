import {FC, useState} from "react";
import {ErrorElement} from "./ErrorElement";
import {ErrorObject} from "../model/ErrorObject";

export const ValidationForm: FC = () => {
    const [errorObject, setErrorObject] = useState<ErrorObject>({numberError: false, continentError: false});
    const [internalError, setInternalError] = useState<boolean>(false);
    const [continent, setContinent] = useState<String>('');
    const [number, setNumber] = useState<string>('');

    return (
        <>
            <div className={'p-4'}>
                <div className={'flex md:flex-row flex-col justify-evenly md:gap-8 gap-4 p-2'}>
                    <div className={'flex flex-col gap-2 hover:scale-105 transition-all'}>
                        <p className={'font-serif text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Continent name selection</p>

                        <select className={'border-1 cursor-pointer outline rounded-full text-center text-lg font-serif font-semibold bg-red-100'} onChange={(event) => setContinent(event.target.value)}>
                            <option disabled={true} value={''}>Please select wanted continent name!</option>
                            <option value={'EU'}>Europe</option>
                            <option value={'AF'}>Africa</option>
                            <option value={'Europe'}>Europe</option>
                            <option value={'Europe'}>Europe</option>
                        </select>
                    </div>

                    <div className={'flex flex-col gap-2 hover:scale-105 transition-all'}>
                        <p className={'font-serif text-lg text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Number of countries 2-10</p>
                        <input type={'number'} placeholder={'Type in the number'} className={'border-1 cursor-pointer outline rounded-full text-center text-lg font-serif font-semibold bg-red-100'}
                            onChange={(event) => setNumber(event.target.value)}
                        />
                    </div>

                    <button className={'w-full border-1 outline hover:scale-105 transition-all rounded-full bg-red-500 hover:bg-red-700'}>
                        <p className={'font-serif font-semibold text-xl '}>Show the countries</p>
                    </button>
                </div>
            </div>

            {internalError
                && <ErrorElement
                    continentError={errorObject.continentError} numberError={errorObject.numberError}/>}
        </>
    )
}