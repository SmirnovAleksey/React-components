import React from "react";
import "./style.css";
import Button from "../button/index.jsx";



export default function (params){

    const title = params.title || 'some text';

    return (
        <div className={'placeForButton'}>
            <span className={'title'}>
               {title}
            </span>

            <Button/>

        </div>
    )

}
