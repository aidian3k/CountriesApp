import {FC} from "react";
import {CountryDetails} from "../model/CountryDetails";

export const CountryElement: FC<CountryDetails> = (props) => {
    function displayInformationToUser(attribute: string[]) {
        if(attribute.length === 0) {
            return <span>No information found</span>
        } else {
            return attribute.map(element => <span>{element }</span>);
        }
    }

    return (
        <tr>
            <SingleDataElement data={props.officialName}/>
            <SingleDataElement data={props.subregion}/>
            <td className="px-6 py-4 whitespace-nowrap font-serif gap-1">
                {displayInformationToUser(props.capitals)}
            </td>
            <td className="flex px-6 py-4 whitespace-nowrap font-serif gap-1">
                {displayInformationToUser(props.languages)}
            </td>
            <SingleDataElement data={props.population}/>
            <td className="flex px-6 py-4 whitespace-nowrap font-serif">
                {displayInformationToUser(props.currencies)}
            </td>
        </tr>
    )
}

export const SingleDataElement: FC<any> = (props) => {
    return (
        <td className="px-6 py-4 whitespace-nowrap font-serif">{props.data}</td>
    )

}