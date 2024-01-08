function removeDuplicates(arr){
    let i = 0

    for (let j = 1; j < arr.length; j++){
        if(arr[j] !== arr[i]){
            i = i + 1
            arr[i] = arr[j]
        }
    }

    let result = []

    for (let k = 0; k <= i; k++){
        result.push(arr[k])
    }

    return result
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3]))