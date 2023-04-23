import {FC, useState} from "react";
import {ErrorElement} from "./ErrorElement";
import {ErrorObject} from "../model/ErrorObject";

export const ValidationForm: FC<any> = (props) => {
    function isNumeric(value: string) {
        return /^\d+$/.test(value);
    }


    function handleSubmit() {
        if (props.continent === '') {
            props.setErrorObject({internal: true, continentError: true, numberError: true});
        } else if(!isNumeric(props.number) || Number(props.number) < 2 || Number(props.number) > 10) {
            props.setErrorObject({internal: true, continentError: false, numberError: true});
        } else {
            props.setErrorObject({internal: false, continentError: false, numberError: false});
        }

        props.setClickedButton(!props.clickedButton)
    }

    function handleSelect(event: any) {
        props.setContinent(event.target.value);
    }

    return (
        <>
            <div className={'p-4'}>
                <div className={'flex md:flex-row flex-col justify-evenly md:gap-8 gap-4 p-2'}>
                    <div className={'flex flex-col gap-2 hover:scale-105 transition-all'}>
                        <p className={'font-serif text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Continent name selection</p>

                        <select className={'border-1 cursor-pointer outline rounded-full text-center text-lg font-serif font-semibold bg-red-100'} onChange={handleSelect} value={props.continent}>
                            <option disabled={true} value={''}>Please select wanted continent name!</option>
                            <option value={'EU'}>Europe</option>
                            <option value={'AF'}>Africa</option>
                            <option value={'AS'}>Asia</option>
                            <option value={'NA'}>North America</option>
                            <option value={'SA'}>South America</option>
                            <option value={'OC'}>Oceania</option>
                            <option value={'AN'}>Antarctica</option>
                        </select>
                    </div>

                    <div className={'flex flex-col gap-2 hover:scale-105 transition-all'}>
                        <p className={'font-serif text-lg text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Number of countries 2-10</p>
                        <input type={'number'} placeholder={'Type in the number'} className={'border-1 cursor-pointer outline rounded-full text-center text-lg font-serif font-semibold bg-red-100'}
                            onChange={(event) => props.setNumber(event.target.value)}
                        />
                    </div>

                    <button className={'w-full border-1 outline hover:scale-105 transition-all rounded-full bg-red-500 hover:bg-red-700'}
                        onClick={() => {
                            handleSubmit()
                        }}
                    >
                        <p className={'font-serif font-semibold text-xl '}>{!props.loading ? 'Show the countries' : 'Processing...'}</p>
                    </button>
                </div>
            </div>

            {props.errorObject.internal
                && <ErrorElement
                    continentError={props.errorObject.continentError} numberError={props.errorObject.numberError} internal={props.errorObject.internal}/>}
        </>
    )
}