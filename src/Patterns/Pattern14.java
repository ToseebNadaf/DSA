package Patterns;

import java.util.Scanner;

public class Pattern14 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        for (int i = 0; i < value; i++) {
            for (char j = 'A'; j <= 'A' + i; j++) {
                System.out.print(j);
            }

            System.out.println();
        }
    }
}
