package Patterns;

import java.util.Scanner;

public class Pattern18 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter No: ");
        int value = input.nextInt();

        for (int i = 0; i < value; i++) {
            for(char ch =(char)(int)('A' + value - 1 - i); ch <= (char)(int)('A' + value - 1); ch++){
                System.out.print(ch + " ");
            }

            System.out.println();
        }
    }
}
