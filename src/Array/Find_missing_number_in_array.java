package Array;

public class Find_missing_number_in_array {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 6, 3, 7, 8};
        int missingNumber = findMissingNumber(arr);
        System.out.println("Missing Number: " + missingNumber);
    }

    private static int findMissingNumber(int[] arr) {
        int n = arr.length;
        int expectedSum = (n + 1) * (n + 2) / 2;
        int actualSum = 0;

        for (int num : arr) {
            actualSum += num;
        }

        return expectedSum - actualSum;
    }
}
