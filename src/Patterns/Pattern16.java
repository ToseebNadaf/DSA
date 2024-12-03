package Patterns;

import java.util.Scanner;

public class Pattern16 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        for (int i = 0; i < value; i++) {
            for (char j = 0; j <= i; j++) {
                System.out.print((char)((int)('A' + i)));
            }

            System.out.println();
        }
    }
}
