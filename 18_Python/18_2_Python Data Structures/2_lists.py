scores = [45,99,100,78,88]
# [45,99,100,78,88]

list('hello')
# ['h','e','l','l','o']

list(range(10,20,2))
# [10,12,14,16,18]

vegan_no_nos = ['eggs','meat','milk','fish','figs']
pie_ingredients = ['flour','apples','sugar','eggs','salt']

# Iterating over pie ingredients 
for food in pie_ingredients:
    if food in vegan_no_nos:
        print(f"OH NO! CANT EAT {food}! ITS NOT VEGAN")
    else:
        print(f"YUM, I LOVE {food}")

vegan_no_nos[1]
# meat

vegan_no_nos[-1]
# figs

vegan_no_nos[2] = 'ghee'
# ['eggs','meat','ghee','fish','figs']

