class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        returnArray = []
        sum = 0
        for numbers in nums:
            sum += numbers
            returnArray.append(sum)
        return returnArray
