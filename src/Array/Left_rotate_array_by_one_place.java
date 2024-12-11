package Array;

public class Left_rotate_array_by_one_place {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original Array:");
        printArray(arr);

        leftRotateByOne(arr);

        System.out.println("Array after left rotation by one:");
        printArray(arr);
    }

    private static void leftRotateByOne(int[] arr) {
        if (arr.length == 0) {
            return;
        }

        int temp = arr[0];

        for (int i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr[arr.length - 1] = temp;
    }

    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
