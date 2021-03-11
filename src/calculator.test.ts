import calculator from './calculator';

describe('Calculator', () => {
    test('Add function words', () => {
        expect(calculator.add(5, 9)).toBe(14);
    });

    test('Subtract function works', () => {
        expect(calculator.subtract(5, 9)).toBe(-4);
    });

    test('Divide function works', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('Doesnt divide by zero', () => {
        expect(calculator.divide(10, 0)).toBe(NaN);
    });

    test('Multiply function works', () => {
        expect(calculator.multiply(5, 4)).toBe(20);
    });
})
