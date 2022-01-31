# expecting dict to be passed in
# with a name and age for a person
# will take age and calculate # of days

def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f'{person["name"]} has been alive for {days} days')
    except KeyError as exc:
        print('Missing key:',exc)
    except TypeError:
        print("Expected person to be a dictionary!")
    except:
        print('Something else is wrong!')

get_days_alive({'age':50})
get_days_alive({1})
get_days_alive({'age':16,'name':'Tysha'})