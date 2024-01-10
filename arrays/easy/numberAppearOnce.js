function findNumberAppearingOnce(arr){
    let xor = arr[0]

    for (let i = 1; i < arr.length; i++){
        xor = xor ^ arr[i]
    }

    return xor
}

console.log(findNumberAppearingOnce([1, 1, 2, 3, 3, 4, 4]))