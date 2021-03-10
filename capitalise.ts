export const CAPITALISE_WARNING : string = 'String must begin with lowercase letter';

export function capitalise(string : string) {
    if(/[a-z]/.test(string.charAt(0))) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return CAPITALISE_WARNING;
    }
}