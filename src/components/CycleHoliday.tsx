import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "👻" | "🏵️" | "🌈" | "🧁" | "✨";
const nextAlpha: Record<Holiday, Holiday> = {
    "🧁": "👻",
    "👻": "🏵️",
    "🏵️": "✨",
    "✨": "🌈",
    "🌈": "🧁"
};
const nextChrono: Record<Holiday, Holiday> = {
    "✨": "🧁",
    "🧁": "🌈",
    "🌈": "👻",
    "👻": "🏵️",
    "🏵️": "✨"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("✨");
    function alphabetical() {
        setHoliday(nextAlpha[holiday]);
    }
    function chronological() {
        setHoliday(nextChrono[holiday]);
    }
    return (
        <div>
            <h2>Cycle Holiday</h2>
            <Button onClick={alphabetical}>Advance by Alphabet</Button>&nbsp;
            <Button onClick={chronological}>Advance by Time</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
