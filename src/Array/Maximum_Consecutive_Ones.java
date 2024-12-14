package Array;

public class Maximum_Consecutive_Ones {
    public static void main(String[] args) {
        int[] arr = {1, 1, 0, 1, 1, 1, 0, 1};
        int result = findMaxConsecutiveOnes(arr);
        System.out.println("Maximum Consecutive Ones: " + result);
    }

    private static int findMaxConsecutiveOnes(int[] arr) {
        int maxCount = 0;
        int currentCount = 0;

        for (int num : arr) {
            if (num == 1) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }

        return maxCount;
    }
}
