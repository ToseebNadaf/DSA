package Array;

public class Find_number_appears_once {
    public static void main(String[] args) {
        int[] arr = {4, 1, 2, 1, 2};
        int result = findSingleNumber(arr);
        System.out.println("The number that appears once is: " + result);
    }

    private static int findSingleNumber(int[] arr) {
        int result = 0;
        for (int num : arr) {
            result ^= num;
        }
        return result;
    }
}
