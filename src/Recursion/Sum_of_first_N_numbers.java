package Recursion;

public class Sum_of_first_N_numbers {
    public static void main(String[] args) {
        int N = 5;
        int result = sum(N);
        System.out.println("Sum of first " + N + " numbers: " + result);
    }

    private static int sum(int N) {
        if (N == 1) {
            return 1;
        }

        return N + sum(N - 1);
    }
}
