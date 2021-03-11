const LOWER_CASE_START = 97;
const UPPER_CASE_START = 65;
const NUM_LETTERS = 26;

function mod (num1 : number, num2: number) {
    //Fix for Javascript modulus not working like normal maths
    return ((num1 % num2)+num2)%num2;
}

export default function caesar(string : string, key : number) : string {
    const absKey = mod(key, NUM_LETTERS);
    const charCodes : number[] = getASCIIArray(string);
    const encrypted : string = charCodes.map(code => encrypt(code, absKey)).join('');
    return encrypted;
}

function getASCIIArray(string : string) : number[] {
    return string.split('').map(char => char.charCodeAt(0));
}

function encrypt(ascii: number, key : number) {
    let caseAdjustment = getCaseAdjustment(ascii);
    if(caseAdjustment === 0) {
        return String.fromCharCode(ascii);
    }
    //Convert ascii to range 0 - 26 and then find new value within range
    let adjustedValue = ((ascii+key) - caseAdjustment) % NUM_LETTERS;
    //Return new value
    return String.fromCharCode(adjustedValue + caseAdjustment);
}

function getCaseAdjustment(ascii: number) {
    let adjustment = 0;
    //Check if letter is lowercase or uppercase
    if(ascii >= LOWER_CASE_START && ascii < (LOWER_CASE_START + NUM_LETTERS)) {
        adjustment = LOWER_CASE_START;
    } else if(ascii >= UPPER_CASE_START && ascii < UPPER_CASE_START + NUM_LETTERS) {
        adjustment = UPPER_CASE_START;
    }
    return adjustment;
}