package Recursion;

public class Print_1_To_N_Backtracking {
    public static void main(String[] args) {
        int N = 5;
        printNumbers(N, N);
    }

    private static void printNumbers(int current, int N) {
        if (current < 1) {
            return;
        }

        printNumbers(current - 1, N);

        System.out.print(current + " ");
    }
}
