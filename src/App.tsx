import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Image from "./images/stolen_jirachi.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Casira&apos;s Special Class with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>The Wishing Star</h1>
            <img src={Image} height={360} alt="A stolen Jirachi" />
            <div>
                <b>Rules of The Wishing Star:</b>
                <ol>
                    <li>
                        Wishes cannot alter the consciousness of another living
                        creature.
                    </li>
                    <li>
                        Each wish will alter a fundamental component of your
                        being in unknown ways.
                    </li>
                    <li>
                        Wishes have to be fun, helpful, or REALLY entertaining.
                    </li>
                </ol>
            </div>
            <Button onClick={() => console.log("Wish granted")}>
                Make a wish
            </Button>
        </div>
    );
}

export default App;
