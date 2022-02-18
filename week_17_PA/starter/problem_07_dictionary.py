# DICTIONARY
#
# Write a function named "my_filter" that takes a dictionary as a parameter.
# Return another dictionary that consists of the key/value pairs from the
# argument where the key has a length greater than or equal to 5. Use any
# construct that want to implement "my_filter".
#
# Test data follows.

# WRITE YOUR CODE HERE
def my_filter(diction):
    if len(diction) < 1:
        return diction
    return {key: diction[key] for key in diction.keys() if len(key) >= 5}

# my_filter({'one': 1, 'two': 2, 'three': 3})
# TEST DATA
# print(my_filter({".": 1, "..": 2, ".....": 5}))  # > {".....": 5}
# print(my_filter({}))  # > {}
# print(my_filter({"12345": 0, "abbba": 0}))  # > {"12345": 0, "abbba": 0}
