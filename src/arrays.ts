/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 0) {
        const firstLast = [numbers[0], numbers[numbers.length - 1]];
        return firstLast;
    }
    return [];
}

/*function triple(toTriple: number): number {
    return toTriple * 3;
}*/

//const _triple = (toTriple: number): number => toTriple * 3;

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((toTriple: number): number => toTriple * 3);
    // or
    //return numbers.map(triple);
    // or
    //return numbers.map(_triple);
    // or
    //return numbers.map(toTriple => toTriple * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((numberize: string): number =>
        !Number.isNaN(parseInt(numberize)) ? parseInt(numberize) : 0
    );
    return numbers.map((numberize: string): number => {
        if (!Number.isNaN(parseInt(numberize))) {
            return parseInt(numberize);
        } else {
            return 0;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const prices = amounts.map((numberize: string): string => {
        if (numberize.charAt(0) === "$") {
            return numberize.slice(1);
        }
        return numberize;
    });
    return stringsToIntegers(prices);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const excitement = messages.map((toCaps: string): string => {
        if (toCaps.slice(-1) === "!") {
            return toCaps.toUpperCase();
        }
        return toCaps;
    });
    return excitement.filter(
        (questions: string): boolean => !questions.includes("?")
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(wordList: string[]): number {
    const shortWords = wordList.filter(
        (word: string): boolean => word.length < 4
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (eachColor: string): boolean =>
            eachColor === "red" || eachColor === "green" || eachColor === "blue"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length < 1) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const theMath = addends.join("+");
    return `${sum}=${theMath}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    values = [...values];
    const sum = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const position = values.findIndex(
        (negative: number): boolean => negative < 0
    );
    // if array contains a negative value
    if (position !== -1) {
        const posVals = values.slice(0, position);
        const posSum = posVals.reduce(
            (posTotal: number, pos: number) => posTotal + pos,
            0
        );
        values.splice(position + 1, 0, posSum);
        return values;
    }
    // if array does NOT contain a negative value
    values.splice(values.length + 1, 0, sum);
    return values;
}
