package Array;

public class Find_large_element_in_array {
    public static void main(String[] args) {
        int[] arr = {3, 5, 7, 2, 8, 10, 1, 6};

        int maxElement = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > maxElement) {
                maxElement = num;
            }
        }

        System.out.println("The largest element in the array is: " + maxElement);
    }
}
