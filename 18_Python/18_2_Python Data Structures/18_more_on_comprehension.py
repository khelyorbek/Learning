### Nested Comprehension ###
print([x for x in range(3)])
# [0, 1, 2]

print([[] for x in range(3)])
# [[], [], []]

print([[0 for y in range(3)] for x in range(3)])
# [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

def gen_board(size,initial_val=None):
    return [[initial_val for x in range(size)] for y in range(size)]

print(gen_board(5,"Boi"))
# [['Boi', 'Boi', 'Boi', 'Boi', 'Boi'], 
#  ['Boi', 'Boi', 'Boi', 'Boi', 'Boi'], 
#  ['Boi', 'Boi', 'Boi', 'Boi', 'Boi'], 
#  ['Boi', 'Boi', 'Boi', 'Boi', 'Boi'], 
#  ['Boi', 'Boi', 'Boi', 'Boi', 'Boi']]     

print(gen_board(3))
# [[None, None, None], 
#  [None, None, None], 
#  [None, None, None]]

### Comprehension with conditional logic ###
print([x for x in range(10) if x % 2 == 0])

chickens = [
    { "name":"Henry","sex":"Rooster"},
    { "name":"Lady Gray","sex":"Hen"},
    { "name":"Junior","sex":"Rooster"},
    { "name":"Stevie Chicks","sex":"Hen"},
    { "name":"Rocket","sex":"Hen"},
    { "name":"Butters","sex":"Rooster"},
]

# creating a new variable that stores hens
# for each bird in chickens
# creating a new list using the name
hens = [bird["name"] for bird in chickens if bird["sex"] == "Hen"]
print(hens)

scores = [55,89,99,87,60,70,74,76,90,50,82]
# grades = ['PASS' for score in scores if score >= 70 else 'FAIL']

grades = ['PASS' if score >= 70 else 'FAIL' for score in scores ]
print(grades)