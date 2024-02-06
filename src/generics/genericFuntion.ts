// function merge<T, U> (objA: T, objB: U) {
//     return Object.assign(objA, objB)
// }
export function merge<T, U> (objA: T, objB: U) {
    return Object.assign(objA, objB) // red error in compiled but still work at run time, solution using 'extends' constrain
}

const mergeObj = merge({name: 'Welly', hobbies: ['tennis', 'learning']}, {age: 49})

// console.log(mergeObj.name);
