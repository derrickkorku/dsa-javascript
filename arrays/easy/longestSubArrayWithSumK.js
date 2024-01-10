function findLogestSubArrayWithSumK(arr, k){
    let max = 0, sum = arr[0], left = 0, right = 0, n = arr.length

    while (right < n){
        while (sum > k && left <= right){
            sum -= arr[left]
            left++
        }

        if (sum === k){
            max = Math.max(max, right - left + 1)
        }

        sum += arr[++right]
    }

    return max
}

console.log(findLogestSubArrayWithSumK([1, 2, 3, 1, 1, 1,1, 3, 3], 6))