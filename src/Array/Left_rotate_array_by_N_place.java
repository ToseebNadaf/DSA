package Array;

public class Left_rotate_array_by_N_place {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int N = 2;

        System.out.println("Original Array:");
        printArray(arr);

        leftRotateByD(arr, N);

        System.out.println("Array after left rotation by " + N + " places:");
        printArray(arr);
    }

    private static void leftRotateByD(int[] arr, int num) {
        int length = arr.length;

        if (num == 0 || num % length == 0) {
            return;
        }

        num = num % length;

        reverse(arr, 0, num - 1);

        reverse(arr, num, length - 1);

        reverse(arr, 0, length - 1);
    }

    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
