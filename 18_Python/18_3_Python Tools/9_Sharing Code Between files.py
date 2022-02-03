# importing our own python file
import 9_helpers

def make_person(name,favColor):
    return {
        'name':name,
        'favColor':favColor,
        'birth_year': get_rand_year(),
        'birth_month': get_rand_month()
    }