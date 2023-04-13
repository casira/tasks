import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

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
            <h1>Hello World</h1>
            <div>
                <Button>Wish</Button>
            </div>
            <p>I wish I could have a button here.</p>
        </div>
    );
}

export default App;
