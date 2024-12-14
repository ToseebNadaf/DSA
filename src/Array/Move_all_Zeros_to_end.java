package Array;

public class Move_all_Zeros_to_end {
    public static void main(String[] args) {
        int[] arr = {0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9};

        moveZerosToEnd(arr);

        System.out.print("Array after moving zeros: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    private static void moveZerosToEnd(int[] arr) {
        int j = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                j++;
            }
        }
    }
}
