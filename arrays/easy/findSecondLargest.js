function findSecondLargest(arr) {
    let largest = arr[0]
    let secondLargest = Number.NEGATIVE_INFINITY

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if (arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

console.log(findSecondLargest([1, 2, 3, 4, 5]))