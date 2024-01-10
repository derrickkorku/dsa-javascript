function findSecondSmallest(arr) {
    let smallest = arr[0]
    let secondSmallest = Number.POSITIVE_INFINITY

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < smallest){
            secondSmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] !== smallest && arr[i] < secondSmallest){
            secondSmallest = arr[i]
        }
    }

    return secondSmallest
}

console.log(findSecondSmallest([1, 2, 3, 4, 5]))