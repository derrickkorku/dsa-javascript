function moveAllZeroesToEnd(arr){
    let result = new Array(arr.length).fill(0)

    let count = 0
    for (let num of arr){
        if (num !== 0){
            result[count] = num
            count++
        }
    }

    return result
}

function optimalSolution(arr){
    let zIndex = -1

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            zIndex = i;
            break;
        }
    }

    for (let j = zIndex + 1; j < arr.length; j++){
        if (arr[j] !== 0){
            swap(arr, zIndex, j)
            zIndex++
        }
    }

    return arr
}


function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(moveAllZeroesToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]))
console.log(optimalSolution([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]))