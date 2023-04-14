import React from "react";
import { render } from "react-dom";

const List = (props : any) => {
    const items = props.listItems.map((item : any, index : number) => {
        return <li key={index}>{item}</li>
    } )

    return (
        <ul>
            {items}
        </ul>
    )
}

export default List;