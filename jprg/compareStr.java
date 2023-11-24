// compare two strings lexicographically

public class compareStr {

    public static void main(String[] args) {
        // Two strings for comparison
        String str1 = "apple";
        String str2 = "banana";

        // Using the compareTo method for lexicographical comparison
        int result = str1.compareTo(str2);

        // Displaying the result
        if (result < 0) {
            System.out.println(str1 + " comes before " + str2);
        } else if (result > 0) {
            System.out.println(str1 + " comes after " + str2);
        } else {
            System.out.println(str1 + " is equal to " + str2);
        }
    }
}

