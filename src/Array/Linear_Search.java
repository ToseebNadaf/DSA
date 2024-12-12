package Array;

public class Linear_Search {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int num = 30;

        int index = findElement(arr, num);

        if (index != -1) {
            System.out.println("Element " + num + " found at index: " + index);
        } else {
            System.out.println("Element " + num + " not found in the array.");
        }
    }

    public static int findElement(int[] arr, int num) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return i;
            }
        }
        return -1;
    }
}
