colors = ('red','yellow','green')
print(type(colors))

chicken = {"color":"gray","breed":"Silkie"}
print(chicken.items())

for(k,v) in chicken.items():
    print(k,v)


# Task: Want to store coordinates for a game boards in a dictionary
board = {
    (0,0): 'X',
    (0,1): None,
    (0,2): '0',
    (1,0): 'X',
    (1,0): '0',
}
print(board)

print(board[(0,0)])
# X

print(board[(0,1)])
# None

print(board[(1,0)])
# 0
