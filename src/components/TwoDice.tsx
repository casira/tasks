import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);
    function playing(): string {
        if (leftDie === rightDie && leftDie !== 1) {
            return "Win";
        }
        if (leftDie === 1 && rightDie === 1) {
            return "Lose";
        }
        return "";
    }
    return (
        <div>
            <h2>Two Dice</h2>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>&nbsp;
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            <div>
                You rolled a <span data-testid="left-die">{leftDie}</span> and a{" "}
                <span data-testid="right-die">{rightDie}</span>.<div>{playing()}</div>
            </div>
        </div>
    );
}
