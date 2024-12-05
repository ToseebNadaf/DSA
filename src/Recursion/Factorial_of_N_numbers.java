package Recursion;

public class Factorial_of_N_numbers {
    public static void main(String[] args) {
        int N = 5;
        int result = factorial(N);
        System.out.println("Factorial of " + N + " is: " + result);
    }

    private static int factorial(int N) {
        if (N == 0 || N == 1) {
            return 1;
        }

        return N * factorial(N - 1);
    }
}
