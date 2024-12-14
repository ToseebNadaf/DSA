package Array;

import java.util.HashMap;

public class Longest_subarray_with_sum_K_PositivesNegatives {
    public static void main(String[] args) {
        int[] arr = {3, 1, -4, 2, 5, 1, -3, 2};
        int k = 5;
        int result = longestSubarrayWithSumK(arr, k);
        System.out.println("Length of the longest subarray: " + result);
    }

    private static int longestSubarrayWithSumK(int[] arr, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < arr.length; i++) {
            prefixSum += arr[i];

            if (prefixSum == k) {
                maxLength = i + 1;
            }

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
        }

        return maxLength;
    }
}
