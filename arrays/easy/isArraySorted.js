function isArraySorted(arr){
    let direction = 0
    let num = arr[0]

    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== num){
            if (arr[i] > num){
                if (direction === 0){
                    direction = 1
                } else if (direction === -1){
                    return false
                }
            } else {
                if (direction === 0){
                    direction = -1
                } else if (direction === 1){
                    return false
                }
            }
        }

        num = arr[i]
    }

    return true
}

console.log(isArraySorted([1, 2, 2, 3, 3, 4]))

console.log(isArraySorted([1, 2, 1, 3, 4]))