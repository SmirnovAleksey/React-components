import './style.css'
import React from "react";



export default function (params){

    const buttonText = params.text || 'See details';

    return (
    <div className={"button_big"}>
        <span className="button__text">
            {buttonText}
        </span>
    </div>
    )
}