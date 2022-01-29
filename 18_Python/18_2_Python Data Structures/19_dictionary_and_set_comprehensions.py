### LISTS ###
print({day:0 for day in 'MTWRFSU'})
# {'M': 0, 'T': 0, 'W': 0, 'R': 0, 'F': 0, 'S': 0, 'U': 0}

print({num: num*num for num in range(1,10)})
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

print({num: num*num for num in range(1,10) if num % 2 == 0})
# {2: 4, 4: 16, 6: 36, 8: 64}

print({num: num*num if num % 2 == 0 else "Odd" for num in range(1,10)})
# {1: 'Odd', 2: 4, 3: 'Odd', 4: 16, 5: 'Odd', 6: 36, 7: 'Odd', 8: 64, 9: 'Odd'}

### SETS ###
print({char for char in'abracadabra'})
# {'d', 'a', 'r', 'c', 'b'}

print({char for char in'hello darkness my old friend'})
# {'s', 'e', 'h', ' ', 'a', 'o', 'f', 'i', 'd', 'k', 'r', 'y', 'n', 'm', 'l'}

print({char for char in'hello darkness my old friend' if char not in 'aeiou'})
# {'f', 'n', ' ', 'r', 'h', 'l', 'k', 'y', 'd', 'm', 's'}