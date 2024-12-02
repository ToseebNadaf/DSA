package Patterns;

import java.util.Scanner;

public class Pattern07 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        for (int i = 0; i < value; i++) {
            for (int j = 0; j <= (value - i - 1); j++) {
                System.out.print(" ");
            }

            for (int j = 0; j < (2 * i + 1); j++) {
                System.out.print("*");
            }

            for (int j = 0; j <= (value - i - 1); j++) {
                System.out.print(" ");
            }

            System.out.println();
        }
    }
}
