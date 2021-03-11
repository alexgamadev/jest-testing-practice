import caesar from './caesar';

describe('Caesar cypher function', () => {
    it('Converts word (+1)', () => {
        expect(caesar('hello', 1)).toBe('ifmmp');
    });

    it('Ignores spaces (+1)', () => {
        expect(caesar('hello world', 1)).toBe('ifmmp xpsme');
    });

    it('Works with higher keys (+8)', () => {
        expect(caesar('x', 8)).toBe('f');
    });

    it('Wraps letters (+1)', () => {
        expect(caesar('z', 1)).toBe('a');
    });

    it('Works with negatives (-16)', () => {
        expect(caesar('d', -16)).toBe('n');
    });

    it('Works with uppercase characters (+6)', () => {
        expect(caesar('XYLOPHONE', 6)).toBe('DERUVNUTK');
    });

    it('Works with mixed case string (-17)', () => {
        expect(caesar('Hello World', -17)).toBe('Qnuux Fxaum');
    });

    it('Ignores punctuation (+3)', () => {
        expect(caesar('Hello !"@+XuS', 3)).toBe('Khoor !"@+AxV');
    });
})