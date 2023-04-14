import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Wish' somewhere", () => {
    render(<App />);
    const texts = screen.getAllByText(/Wish/);
    expect(texts.length).toBeGreaterThanOrEqual(1);
});
