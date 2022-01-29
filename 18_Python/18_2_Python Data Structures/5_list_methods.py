from re import T


chickens = ['butters','lady gray','stevie chicks']

chickens.append('henry')
# ['butters','lady gray','stevie chicks','henry']

copy_flock = chickens.copy()
# exact copy but different memory addresses

chickens.count('butters')
# 1. returns count of passed arg

chicks = ['herbert','annabelle']
chickens.extend(chicks)
# changes the chickens to include 2 items from chicks

chickens.index('henry')
# 3

chickens.index(3)
# 'henry'

chickens.insert(0,'tina')
# inserts tina at pos 0

chickens.inser(9,['harry','hermione'])
# adds the list inside of the original list

chickens.pop(0)
# returns 'tina' and removes it from the list

chickens.reverse();
# reverses the list

chickens.sort()
# If contents are string, will sort alphabetically.
# If contents are numbers, will sort ascending order
# BUT CANNOT MIX DATA TYPES (NUMBERS AND STRINGS)

chickens.sort(reverse=True)
# sorts in reverse

