import {FC} from "react";
import {ErrorObject} from "../model/ErrorObject";

export const ErrorElement: FC<ErrorObject> = (props) => {
    const handleErrorMessage = () => {
        if (props.continentError) {
            return 'You should choose the continent from the list!';
        } else if(props.numberError) {
            return 'You should type in the integer between 2 and 10';
        } else {
            return 'You should type in proper number and choose continent!';
        }
    }

    return (
        <div className={'flex justify-center'}>
            <button className={'bg-red-700 rounded-full px-4 py-1'}>
                <p className={'text-white font-semibold text-lg font-serif'}>{handleErrorMessage()}</p>
            </button>
        </div>
    )
}