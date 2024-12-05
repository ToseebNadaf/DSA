package Recursion;

public class Print_N_to_1 {
    public static void main(String[] args) {
        int N = 5;
        printNumbers(N);
    }

    private static void printNumbers(int N) {
        if (N == 0) {
            return;
        }
        System.out.println(N);
        printNumbers(N - 1);
    }
}
