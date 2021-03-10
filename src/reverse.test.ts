import { ReverseString } from './reverse';

describe('Reverse String', () => {
    it('reverses string', () => {
        expect(ReverseString('hi')).toBe('ih');
    });
    
    it('reverses string with spaces', () => {
        expect(ReverseString('how are you doing'))
        .toBe('gniod uoy era woh');
    })
});