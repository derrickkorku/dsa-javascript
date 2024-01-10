function leftRotateArray(arr, by){
    let rotate = []
    let num = by % arr.length

    console.log(num)

    if (num === 0) return arr

    for (let i = 0; i < num; i++){
        rotate.push(arr[i])
    }
    
    let j = 0

    while (num < arr.length){
        arr[j] = arr[num]
        num++
        j++
    }

    for (let c = 0; c < rotate.length; c++){
        arr[j] = rotate[c]
        j++
    }

    return arr
}


console.log(leftRotateArray([1, 2, 3, 4, 5, 6, 7], 6))