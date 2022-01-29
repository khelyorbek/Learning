lemon = {'sour','yellow','fruit','bumpy'}
banana = {'fruit','smooth','sweet','yellow'}

# combines and dupes removed
print('Union: ', lemon | banana)
# ^ v are almost the same thing
banana.union(lemon)

# things that are in common
print('Intersection: ', lemon & banana)
# ^ v are almost the same thing
banana.intersection(lemon)

# things that are NOT in common
print('Subtraction: ', lemon - banana)
# ^ v are almost the same thing
lemon.difference(banana)

# things that are NOT in common
print('Subtraction: ', banana - lemon)
# ^ v are almost the same thing
banana.difference(lemon)

# What elements only exist in one of the sets? Put them into new set and return
print('Symmetric Difference: ', banana ^ lemon)
# ^ v are almost the same thing
banana.symmetric_difference(lemon)

# Difference between shortcuts vs. Calling methods on top of sets
lemon = {'sour','yellow','fruit','bumpy'}
banana = {'fruit','smooth','sweet','yellow'}
orange = ['fruit','bumpty','orange','sweet']
# orange is a list. Not a set

# lemon & orange
# Errors out

lemon.intersection(orange)
# will create a set based on orange and then compare

# orange.intersection(lemon)
# will not work because an orange is not set and we cannot access the intersection method
