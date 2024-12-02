package Patterns;

import java.util.Scanner;

public class Pattern05 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        for (int i = 1; i <= value; i++) {
            for (int j = value; j >= i; j--) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
