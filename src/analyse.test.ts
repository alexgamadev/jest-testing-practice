import analyse from './analyse';

//Average (mean)
//Min
//Max
//Length

describe('Analyse function', () => {
    it('Returns object', () => {
        expect(analyse([])).toEqual({mean: 0, min: 0, max: 0, length: 0});
    });

    it('Works with positives', () => {
        expect(analyse([1, 2, 3, 4, 5])).toEqual({
            mean: 3,
            min: 1,
            max: 5,
            length: 5,
        });
    })

    it('Works with negatives', () => {
        expect(analyse([-6, 2, -8, 4, 22, 18, 12, -13])).toEqual({
            mean: 3.875,
            min: -13,
            max: 22,
            length: 8,
        });
    })

    it('Works with floats', () => {
            const obj = analyse([3.8, 9.6, 1.2, 4.5, 22.9, -5.4, -12.2, -13.1]);
            expect(obj.mean).toBeCloseTo(1.4125);
            expect(obj.min).toBe(-13.1);
            expect(obj.max).toBe(22.9);
            expect(obj.length).toBe(8);
    })
});