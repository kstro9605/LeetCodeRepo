class Solution {
    public int[] runningSum(int[] nums) {
        int resultingArray[] = new int[nums.length];
        int sum = 0;
        for(int i = 0; i < nums.length; i++)
        {
            sum += nums[i];
            resultingArray[i] = sum;
        }

        return resultingArray;
    }
}