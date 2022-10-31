import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders my name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/Casira/i);
    expect(linkElement).toBeInTheDocument();
});
