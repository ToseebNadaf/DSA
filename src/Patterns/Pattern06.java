package Patterns;

import java.util.Scanner;

public class Pattern06 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        for (int i = 1; i <= value; i++) {
            for (int j = value; j >= i; j--) {
                System.out.print(value - j + 1 + " ");
            }

            System.out.println();
        }
    }
}
