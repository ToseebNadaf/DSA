package Array;

import java.util.HashSet;

public class longest_subsequence_of_consecutive_int {
    public static void main(String[] args) {
        int[] arr1 = {2, 6, 1, 9, 4, 5, 3};
        System.out.println(findLongestConsecutiveSubsequence(arr1));
    }

    public static int findLongestConsecutiveSubsequence(int[] arr) {
        HashSet<Integer> set = new HashSet<>();

        for (int num : arr) {
            set.add(num);
        }

        int longestStreak = 0;

        for (int num : arr) {
            if (!set.contains(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;

                while (set.contains(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
    }

