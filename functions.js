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

// console.log(arr1);
// console.log(mySlice(arr1, 3, 5 ));// 3, 'let'
// console.log(mySlice(arr1, 1, 4 ));// 3, 5, 3

function myIndexOf(arr, item, from) {
    
    if (!Array.isArray(arr)) {
        console.error("first argument must be an array");
    }

    
    if (from === undefined) {
        from = 0;
    } else if (from < 0) {
        
        from = arr.length + from;
        if (from < 0) from = 0;
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}


const arr2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr2);
// console.log(myIndexOf(arr2, 'c')); // 2
// console.log(myIndexOf(arr2, 'f')); // -1
// console.log(myIndexOf(arr2, 'b', 1)); // 1



function myIncludes(arr, item, from) {
    
    if (!Array.isArray(arr)) {
        console.error("first argument must be an array");
    }

    
    if (from === undefined) {
        from = 0;
    } else if (from < 0) {
    
        from = arr.length + from;
        if (from < 0) from = 0;
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}


const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3);
// console.log(myIncludes(arr3, 3)); // true
// console.log(myIncludes(arr3, 6)); // false
// console.log(myIncludes(arr3, 2, 1)); // true