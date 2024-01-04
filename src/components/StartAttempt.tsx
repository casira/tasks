import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function quiz(): void {
        setAttempt(attempt - 1);
        setProgress(!progress);
    }
    return (
        <>
            <div>
                <h2>Quiz</h2>
                <Button onClick={quiz} disabled={progress || attempt === 0}>
                    Start Quiz
                </Button>
                &nbsp;
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
                &nbsp;
                <Button onClick={() => setAttempt(attempt + 1)} disabled={progress}>
                    Mulligan
                </Button>
            </div>
            <div>Attempts: {attempt}</div>
        </>
    );
}
