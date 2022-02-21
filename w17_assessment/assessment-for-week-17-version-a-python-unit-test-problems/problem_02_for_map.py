# FOR LOOP
#
# In this problem, write a function named "my_for_map" that accepts an
# iterable of strings as a parameter and returns a new list with strings from
# the original list that are all transformed to upper case. The function must
# use a for loop in its implementation.
#
# The str object in Python has a method on it named "upper".
#
# There are two sample data calls for you to use.

# WRITE YOUR FUNCTION HERE
def my_for_map(iter):
    upper = []
    for i in range(len(iter)):
        upper.append(iter[i].upper())
    return upper

# TEST DATA
test = ["plop", "", "drop", "zop", "stop"]
print(my_for_map(test))  # > ["PLOP", "", "DROP", "ZOP", "STOP"]

test = []
print(my_for_map(test))  # > []
