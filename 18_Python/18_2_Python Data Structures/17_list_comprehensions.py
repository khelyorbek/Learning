nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

# finding even/odds using old for in method
evens = []
odds = []
for num in nums:
    if num % 2 == 0:
        evens.append(num)
    else:
        odds.append(num)
print(evens)

# finding even/odds using LIST COMPREHENSIONS
evens2 = [num2 for num2 in nums if num2 % 2 == 0]
odds2 = [num2 for num2 in nums if num2 % 2 == 1]
print(evens2)
print(odds2)

# Taking a step back and doing a simpler comprehension
[num3 * 2 for num3 in nums]
# for num3 in nums = Loop (For some variable in some collection)
# num3 * 2 = What we want to add to the list. Doubling an original value

# Same thing as above but in plain old python
new_list = []
for num4 in nums:
    new_list.append(num4 * 2)
print(new_list)

# Instead of messing with numbers, lets use a string
# Will create a new list with the same lenght
# But each element will be "Hi"
print(["Hi" for num3 in nums])

# Returning a squared value of each item
print([num5 * num5 for num5 in [2,4,6,8]])

# Can create lists from data types that are not lists
print([char for char in 'lmfao'])
# ['l', 'm', 'f', 'a', 'o']

print([char.upper() for char in 'lmfao'])
# ['L', 'M', 'F', 'A', 'O']

print([char.upper() + '.' for char in 'lmfao'])
# ['L.', 'M.', 'F.', 'A.', 'O.']

print([num for num in range(10,20)])
# [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

print([num/2 for num in range(10,20)])
# [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5]