// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array 
// or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole 
// array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid 
// sublist/subarray.

const maxSequence = (arr) => {
    let tempArr = arr.filter((el) => el >= 0)
    if(tempArr.length === 0){
        return 0
    }else if(tempArr.length === 1){
        return tempArr[0]
    }else{
        let maxSum = arr[0]
        for(let i = 0; i < arr.length; i++){
            let currentSum = 0
            for(let j = i; j < arr.length; j++){
                currentSum += arr[j]
                if(currentSum > maxSum){
                    maxSum = currentSum
                } 
            }
        }
        return maxSum
    }
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

//Solution 2

const maxSequence = (arr) => {
    let currentSum = 0
    let maxSum = arr[0]
    let tempArr = arr.filter((el) => el >= 0)
    if(tempArr.length === 0){
        return 0
    }else if(tempArr.length === 1){
        return tempArr[0]
    }else{
        for(let i = 0; i < arr.length; i++){
            currentSum += arr[i]
            if(currentSum > maxSum){
                maxSum = currentSum
            }
            if(currentSum < 0){
                currentSum = 0
            }
        }
    }

    return maxSum
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])