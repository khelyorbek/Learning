'92'.zfill(5)
# '00092'

'9123'.zfill(5)
# '09123'

msg = 'Hello world!'
msg.count('l')
# 3

msg.endswith('!')
# True

msg.startswith('L')
# False

msg.find('w')
# 7

'hello4'.isdigit()
# False

'4'.isdigit()
# True

msgList = ['hello','world','test']
"-".join(msgList)
# 'hello-world-test'

"LOL".lower()
# 'lol'

"lololol".upper()
# 'LOLOLOL

'mr Potato'.capitalize()
# 'Mr Potato'

"LOL".isupper()
# True

'lol'.isupper()
# False

vegs = 'tomato-potato-carrot'
vegs.replace('-','=')
# tomato=potato=carrot

vegs.replace('-','=',1)
# tomato=potato-carrot

text = "I admire you so much"
text.replace(' ','...')
# 'I...admire...you...so...much'

animals = "goats,chickens,ducks,pigs,alpacas"
animals.split(',')
# ['goats','chickens','ducks','pigs','alpacas']

"""
Hello
I
See
You""".splitlines()
# ['','Hello','I','See','You']

user_input = '   catlady   '
user_input.strip()
# 'catlady'

user_input2 = '   ca t l a dy   '
user_input2.strip()
# 'ca t l a dy'
# doesn't remove the spaces in between the chars