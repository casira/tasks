import React from "react";
import { render, screen } from "@testing-library/react";
import { CycleHoliday } from "./CycleHoliday";

describe("CycleHoliday Component tests", () => {
    beforeEach(() => {
        render(<CycleHoliday />);
    });

    test("An initial holiday is displayed", () => {
        const initialHoliday = screen.getByText(/Holiday: (.*)/i);
        expect(initialHoliday).toBeInTheDocument();
    });

    test("There are two buttons", () => {
        const alphabetButton = screen.getByRole("button", {
            name: /Alphabet/i
        });
        const timeButton = screen.getByRole("button", {
            name: /Time/i
        });
        expect(alphabetButton).toBeInTheDocument();
        expect(timeButton).toBeInTheDocument();
    });

    test("Can cycle through 5 distinct holidays alphabetically", () => {
        const alphabetButton = screen.getByRole("button", {
            name: /Alphabet/i
        });
        const initialHoliday = screen.getByText(/Holiday ?[:)-](.*)/i);
        const states: string[] = [];
        for (let i = 0; i < 6; i++) {
            states.push(initialHoliday.textContent || "");
            alphabetButton.click();
        }
        const uniqueStates = states.filter((x, y) => states.indexOf(x) == y);
        expect(uniqueStates).toHaveLength(5);
        expect(states[0]).toEqual(states[5]);
    });

    test("Can cycle through 5 distinct holidays by time", () => {
        const timeButton = screen.getByRole("button", {
            name: /Time/i
        });
        const initialHoliday = screen.getByText(/Holiday ?[:)-](.*)/i);
        const states: string[] = [];
        for (let i = 0; i < 6; i++) {
            states.push(initialHoliday.textContent || "");
            timeButton.click();
        }
        const uniqueStates = states.filter((x, y) => states.indexOf(x) == y);
        expect(uniqueStates).toHaveLength(5);
        expect(states[0]).toEqual(states[5]);
    });
});
