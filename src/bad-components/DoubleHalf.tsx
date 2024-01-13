import React, { useState } from "react";
import { Button } from "react-bootstrap";
//Interfaces specify the required minimal fields of an object
interface dh {
    dhValue: number;
    setDhValue: (theValue: number) => void;
}
//The following syntax "unpacks" the dh fields as variables
function Doubler({ dhValue, setDhValue }: dh): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}
//Props is the parameter name used as an alternative way to access the dh object's fields
//dh is the type of object being passed to Halver
//The "props." syntax allows accessing of the specific fields
function Halver(props: dh): JSX.Element {
    return <Button onClick={() => props.setDhValue(0.5 * props.dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
