chicken = {
    'name':'butters',
    'age':'6 months',
    'breed':'Silkie'
    }


stuff = {
    True: 34,
    100: "Awesome"
}

'breed' in chicken
# True

'butters' in chicken
# False. Only looks at keys

chicken['breed']
# 'Silkie'

chicken['age']
# '6 months'

chicken['name']
# 'butters'

chicken['age'] = 12
chicken
# {
#     'name':'butters',
#     'age':12,
#     'breed':'Silkie'
#     }