/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const returnArr = new Array(nums.length);
    var sum = 0;
    for(let i=0; i < nums.length; i++)
    {
        sum += nums[i];
        returnArr[i] = sum;
    }
    return returnArr;
};