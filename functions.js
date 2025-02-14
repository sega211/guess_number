"use strict";

function mySlice(arr, start, end) {
    if (!Array.isArray(arr)) {
        console.error("first argument must be an array");
    }

    if (start === undefined) {
        start = 0;
    } else if (start < 0) {
        
        start = arr.length + start;
        if (start < 0) start = 0;
    }

    
    if (end === undefined) {
        end = arr.length;
    } else if (end < 0) {
        end = arr.length + end;
        if (end < 0) end = 0;
    }

    if (start > end) {
        return [];
    }

    const result = [];
    for (let i = start; i < end; i++) {
        if (i >= arr.length) break; 
        result.push(arr[i]);
    }
    return result;
}

const arr1 = [1, 3, 5, 3, "let"];

const newArr = mySlice(arr1, 3, 5 );

console.log(arr1);
console.log(newArr);