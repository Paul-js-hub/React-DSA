def print_stars(n):
    """
    Prints a pattern of stars in increasing order and then in decreasing order.
    :param n: Number of lines in the pattern.
    """
    if n <= 0:
        return  # Base case: Stop when n is non-positive

    # Print stars in increasing order
    print("*" * n)

    # Recursively call the function with n-1
    print_stars(n - 1)

    # Print stars in decreasing order
    print("*" * n)

# Example usage:
print_stars(4)  # Change the argument to create different patterns


