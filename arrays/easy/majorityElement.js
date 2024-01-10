function findMajorityElement(arr){
    let count = 1, el = arr[0]

    for (let i = 1; i < arr.length; i++){
        if (count === 0){
            el = arr[i]
            count++
        } else if (arr[i] === el){
            count++
        } else {
            count--
        }
    }

    let cnt = 0

    for (let num of arr){
        if (num === el){
            cnt++
        }
    }

    if (cnt > arr.length / 2) return el

    return  -1
}

console.log(findMajorityElement([2,2,1,3,1,1,3,1,1]))