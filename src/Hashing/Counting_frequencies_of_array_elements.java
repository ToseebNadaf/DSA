package Hashing;

import java.util.HashMap;
import java.util.Map;

public class Counting_frequencies_of_array_elements {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 2, 1, 4, 1};

        Map<Integer, Integer> frequencyMap = countFrequencies(array);

        System.out.println("Element frequencies:");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }

    private static Map<Integer, Integer> countFrequencies(int[] array) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int element : array) {
            frequencyMap.put(element, frequencyMap.getOrDefault(element, 0) + 1);
        }

        return frequencyMap;
    }
}
