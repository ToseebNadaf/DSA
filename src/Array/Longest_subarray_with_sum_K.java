package Array;

public class Longest_subarray_with_sum_K {
    public static void main(String[] args) {
        int[] arr = {4, 1, 1, 1, 2, 3, 5};
        int k = 5;
        int result = longestSubarrayWithSumK(arr, k);
        System.out.println("Length of the longest subarray: " + result);
    }

    private static int longestSubarrayWithSumK(int[] arr, int k) {
        int start = 0, currentSum = 0, maxLength = 0;

        for (int end = 0; end < arr.length; end++) {
            currentSum += arr[end];

            while (currentSum > k && start <= end) {
                currentSum -= arr[start];
                start++;
            }

            if (currentSum == k) {
                maxLength = Math.max(maxLength, end - start + 1);
            }
        }
        return maxLength;
    }
}
