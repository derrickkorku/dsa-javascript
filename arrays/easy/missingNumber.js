function findMissingNumber(arr, num){
    let ar = Array(num + 1).fill(false)

    for (let n of arr){
        ar[n] = true
    }

    for (let i = 1; i <= num; i++){
        if (ar[i] === false){
            return i
        }
    }

    return -1
}

function betterSolution(arr, num){
    let sum = (num * (num + 1)) / 2

    for (let n of arr){
        sum -= n
    }

    return sum
}

function optimalSolution(arr, num){
    let xor = 0

    for (let i = 0; i < num; i++){
        xor = xor ^ (arr[i]) ^ (i + 1)
    }


    return xor
}
console.log(findMissingNumber([1, 2, 4, 5], 5))
console.log(betterSolution([1, 2, 4, 5], 5))
console.log(optimalSolution([1, 2, 4, 5], 5))