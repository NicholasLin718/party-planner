import React, {useEffect, useState} from 'react';
import Slot from './Slot';
import "./styles.css";

export default function Column(props) {
    const startValue = props.startValue;
    const endValue = props.endValue;
    let iterations = (endValue.hour - startValue.hour);
    const [requireStart] = useState(!startValue.is_00);
    const [requireEnd] = useState(!endValue.is_00);
    let columnArr = [];
    let x = 0;
    if(requireStart) x = 1;
    for(; x < iterations; x++){
        columnArr.push(x);
    }
    return (
        <div>
            {requireStart && <div><h1>{startValue.hour}</h1><Slot/></div>}
            {columnArr.map((i) => 
                (
                    <div key={i}>
                        <h1>{startValue.hour + i}</h1>
                        <Slot/>
                        <Slot/>
                    </div>
                )
            )}
            {requireEnd && <div><h1>{endValue.hour}</h1><Slot/></div>}
        </div>
    )
}
