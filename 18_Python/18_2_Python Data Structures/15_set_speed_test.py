lemon = {'sour','yellow','fruit','bumpy'}
banana = {'fruit','smooth','sweet','yellow'}
orange = ['fruit','bumpy','orange','sweet']

# combining for loop and set operator
for adj in banana | lemon | set(orange):
    print(adj)

list(lemon)
# ['sour','yellow','fruit','bumpy']

list(lemon & banana)
# ['fruit','yellow]

