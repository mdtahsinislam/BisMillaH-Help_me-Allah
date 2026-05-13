function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(num => arr2.includes(num));
}


//console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

