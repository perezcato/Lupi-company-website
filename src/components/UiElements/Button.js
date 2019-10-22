import React from 'react';



export default function  Button(props){
    return (
        <button className="b-btn  mr-10 h-12 w-32 outline-none relative">
            {props.children}
        </button>
    )
}
