package Patterns;

import java.util.Scanner;

public class Pattern11 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        int start = 0;
        for (int i = 1; i <= value; i++) {

            if (i % 2 == 0){
                start = 0;
            } else {
                start = 1;
            }

                for (int j = 1; j <= i; j++) {
                    System.out.print(start);
                    start = 1 - start;
                }

            System.out.println();
        }
    }
}
