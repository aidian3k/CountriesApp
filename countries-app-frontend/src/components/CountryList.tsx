import {FC} from "react";
import {CountryElement} from "./CountryElement";

export const CountryList: FC = () => {
    
    return (
        <div className={'w-full p-2'}>
            <p className={'font-serif md:text-2xl text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mb-2'}>Displaying 5 random countries details from Europe</p>

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
                            <CountryElement/>
                            <CountryElement/>
                            <CountryElement/>
                            <CountryElement/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export const TableHeading: FC<any> = (props) => {
    return (
        <th className="px-6 py-3 text-gray-600 bg-gray-100 font-serif">{props.header}</th>
    )
}