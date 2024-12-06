package Recursion;

public class Print_N_to_1_Backtracking {
    public static void main(String[] args) {
        int N = 5;
        printNumber(1,N);
    }

    private static void printNumber(int current, int N) {
        if (current > N){
            return;
        }

        printNumber(current + 1, N);

        System.out.print(current + " ");
    }
}
