export interface AnalyseObj {
    mean: number,
    min : number,
    max: number,
    length : number,
}

export default function analyse(arr : number[]) : AnalyseObj {
    const obj : AnalyseObj  = {
        mean: getMean(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    } 
    return obj;
}

function getMin(array : number[]) : number {
    if(array.length <= 0) return 0;
    return (array.reduce((min, curr) => {
        if(curr < min) {
            min = curr;
        } 
        return min;
    }, Infinity));
}

function getMax(array : number[]) : number {
    if(array.length <= 0) return 0;
    return (array.reduce((max, curr) => {
        if(curr > max) {
            max = curr;
        } 
        return max;
    }, 0));
}

function getMean(array : number[]) : number {
    if(array.length <= 0) return 0;

    return (array.reduce((acc, curr) => acc += curr) / array.length);
}