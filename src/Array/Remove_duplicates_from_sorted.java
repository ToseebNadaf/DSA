package Array;

public class Remove_duplicates_from_sorted {
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 3, 3, 4, 5, 5};
        int newLength = removeDuplicates(arr);

        System.out.println("Array after removing duplicates:");
        for (int i = 0; i < newLength; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    private static int removeDuplicates(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }

        int i = 0;
        for (int j = 1; j < arr.length; j++) {
            if (arr[j] != arr[i]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    }
}
