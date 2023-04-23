import {FC} from "react";

export const Header: FC<any> = (props) => {
    return (
        <p className={'font-serif md:text-2xl text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mb-2'}>
            {props.data}</p>
    )
}