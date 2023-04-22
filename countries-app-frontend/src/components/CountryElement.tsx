import {FC} from "react";

export const CountryElement: FC = () => {
    return (
        <tr>
            <SingleDataElement data={'Data 1'}/>
            <SingleDataElement data={'Data 1'}/>
            <SingleDataElement data={'Data 1'}/>
            <SingleDataElement data={'Data 1'}/>
            <SingleDataElement data={'Data 1'}/>
            <SingleDataElement data={'Data 1'}/>
        </tr>
    )
}

export const SingleDataElement: FC<any> = (props) => {
    return (
        <td className="px-6 py-4 whitespace-nowrap font-serif">{props.data}</td>
    )

}