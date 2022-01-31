nums = [2,4,6,8]

# JS
# [...nums]

# Python
print([*nums])
# [2, 4, 6, 8]

print([-2,0,*nums])
# [-2, 0, 2, 4, 6, 8]

odds = [1,3,4,5,7,9]

print([*odds,*nums])
# [1, 3, 4, 5, 7, 9, 2, 4, 6, 8]

# List
print([*'hello'])
# ['h', 'e', 'l', 'l', 'o']

# Set
print({*'hello'})
# {'l', 'e', 'o', 'h'}

rainfall = {'Jan':2.5,'Feb':4.9}
print({*rainfall})
# {'Jan', 'Feb'}. Not what we want. Its a set. Not a dictionary.

print({**rainfall})
# {'Jan': 2.5, 'Feb': 4.9}. Only available in Python >3.5. Dictionary.


