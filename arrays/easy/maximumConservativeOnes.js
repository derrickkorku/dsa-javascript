function findMaxConservativeOnes(arr){
    let max = 0

    let counter = 0

    for (let num of arr){
        if (num !== 1){
            max = Math.max(max, counter)
            counter = 0
        } else {
            counter++
        }
    }

    return max
}

console.log(findMaxConservativeOnes([1,1,0,1,1,1,0,1,1]))