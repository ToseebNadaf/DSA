package Hashing;

import java.util.HashMap;
import java.util.Map;

public class Find_the_Highest_frequency_element {
    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 1, 4, 1, 3, 3, 3, 5};

        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        int maxFrequency = 0;
        int elementWithMaxFrequency = -1;

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > maxFrequency) {
                maxFrequency = entry.getValue();
                elementWithMaxFrequency = entry.getKey();
            }
        }

        System.out.println("Element with the highest frequency: " + elementWithMaxFrequency);
        System.out.println("Frequency: " + maxFrequency);
    }
}
