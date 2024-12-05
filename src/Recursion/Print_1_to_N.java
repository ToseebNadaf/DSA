package Recursion;

public class Print_1_to_N {
    public static void main(String[] args) {
        int N = 5;
        printNumbers(1, N);
    }

    private static void printNumbers(int start, int N) {
        if (start > N) {
            return;
        }
        System.out.println(start);
        printNumbers(start + 1, N);
    }
}
