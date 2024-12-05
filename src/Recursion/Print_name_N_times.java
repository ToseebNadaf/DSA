package Recursion;

public class Print_name_N_times {
    public static void main(String[] args) {
        String name = "Raju";
        int N = 5;
        printName(name, N);
    }

    private static void printName(String name, int count) {
        if (count == 0) {
            return;
        }
        System.out.println(name);
        printName(name, count - 1); //
    }
}
