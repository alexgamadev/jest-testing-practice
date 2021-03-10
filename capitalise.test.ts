import { capitalise, CAPITALISE_WARNING } from './capitalise';

describe('Capitalise String', () => {
    it('Returns the first letter as capital', () => {
        expect(capitalise('hello')).toBe('Hello');
    });

    it('Must start with lowercase letter', () => {
        expect(capitalise(' hello')).toBe(CAPITALISE_WARNING);
    })
});