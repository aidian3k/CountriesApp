import {FC, useEffect, useState} from "react";
import {CountryElement} from "./CountryElement";
import {CountryDetails} from "../model/CountryDetails";

export const CountryList: FC<any> = (props) => {
    const [data, setData] = useState<CountryDetails[]>([]);

    useEffect(() => {
        if (props.errorObject.internal || props.continent === '') {
            return;
        }

        props.setLoading(true);

        fetch('http://localhost:8080/' + props.continent + '/' + props.number)
            .then(response => response.json())
            .then(data => {
                setData(data);
                props.setLoading(false);
            })
            .catch(error => {
                props.setLoading(false);
                setData([]);
                props.setErrorObject({internal: true, numberError: false, continentError: false})
            });
    }, [props.clickedButton]);

    function getElements() {
        if (data !== undefined && data !== null) {
            return data.map(element => {
                return (
                    <CountryElement officialName={element.officialName}
                                    subregion={element.subregion}
                                    capitals={element.capitals}
                                    languages={element.languages}
                                    population={element.population}
                                    currencies={element.currencies}/>
                )
            });
        } else {
            return [];
        }
    }

    const elements: JSX.Element[] = getElements()

    return (
        <Elements elements={elements} continent={props.continent} number={props.number}/>
    )
}

export const TableHeading: FC<any> = (props) => {
    return (
        <th className="px-6 py-3 text-gray-600 bg-gray-100 font-serif">{props.header}</th>
    )
}

export const Elements: FC<any> = (props) => {
    return (
        <div className={'w-full p-2'}>
            <p className={'font-serif md:text-2xl text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mb-2'}>Displaying {props.number} random
                countries details from {props.continent}</p>

            <div className="w-full overflow-hidden rounded-lg shadow-md">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="text-left font-bold font-serif">
                            <TableHeading header={'Official name'}/>
                            <TableHeading header={'Subregion'}/>
                            <TableHeading header={'Capitals'}/>
                            <TableHeading header={'Languages'}/>
                            <TableHeading header={'Population'}/>
                            <TableHeading header={'Currencies'}/>
                        </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                        {props.elements}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}