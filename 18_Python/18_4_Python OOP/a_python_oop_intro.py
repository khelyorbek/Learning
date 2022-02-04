# using a built in class first
from collections import Counter

my_counter = Counter("OOMPA LOOMPA")

print(my_counter)
# Counter({'O': 4, 'M': 2, 'P': 2, 'A': 2, ' ': 1, 'L': 1})

print(type(my_counter))
# <class 'collections.Counter'>

isinstance(my_counter,Counter)
# True

print(my_counter.most_common())
# [('O', 4), ('M', 2), ('P', 2), ('A', 2), (' ', 1), ('L', 1)]

# built in Date class
from datetime import date

my_date = date(2020,2,14)
print(my_date.year)
print(my_date.day)
print(my_date.weekday())
