colors = ['red','orange','yellow']

colors[0:1] = ['dark red','pink']
# ['dark red','pink','orange','yellow']

colors[3:] = ['dark yellow','green','blue','purple']
# ['dark red','pink','orange','dark yellow','green','blue','purple']

colors[5:0] = []
# ['dark red','pink','orange','dark yellow','green']

colors[::2] = ['LOL']
# Will generate an error saying that we are trying to assing 1 value to a more than 1 items
# We need to put as many LOLs as there are remaining values in the array