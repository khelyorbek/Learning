names = ['charlie','lucy']

# destructuring
name1, name2 = names

# tuple and destructuring
point = (100,58)
x,y = point

# using rest
sorted_scores = [2400, 2350, 2100, 1960]
top_score, *scores = sorted_scores

# using rest with a string
first_name = 'Xander'
initial, *rest = first_name


point = (40,50,20)
x,y,z = point
# (x,y,z) = (40,50,20)

color_pairs = [['red','green'],['purple','orange']]
pair1, pair2 = color_pairs

((primary1,secondary1),(primary2,secondary2)) = color_pairs

### Instead of a for loop, can use unpacking ###
grades = {
    'A': 12,
    'B': 19,
    'C':30
} 
# Old method
# for pair in grades.items():
#     print(pair)

# New method
for (k,v) in grades.items():
    print(k,v)