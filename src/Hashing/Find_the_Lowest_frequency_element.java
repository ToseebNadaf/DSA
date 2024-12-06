package Hashing;

import java.util.HashMap;
import java.util.Map;

public class Find_the_Lowest_frequency_element {
    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 1, 4, 1, 3, 3, 3, 5};

        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        int minFrequency = Integer.MAX_VALUE;
        int elementWithMinFrequency = -1;

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() < minFrequency) {
                minFrequency = entry.getValue();
                elementWithMinFrequency = entry.getKey();
            }
        }

        System.out.println("Element with the lowest frequency: " + elementWithMinFrequency);
        System.out.println("Frequency: " + minFrequency);
    }
}
