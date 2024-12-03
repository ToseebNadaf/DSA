package Patterns;

public class Pattern22 {
    public static void main(String[] args) {
        int n = 3;

        int size = 2 * n - 1;
        int[][] pattern = new int[size][size];

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                int value = n - Math.min(Math.min(i, j), Math.min(size - 1 - i, size - 1 - j));
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }
}
