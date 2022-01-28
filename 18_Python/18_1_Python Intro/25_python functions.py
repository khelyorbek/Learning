def greet(person):
    return f"Hello there, {person}"
    # using f string here (string literal in JS)

print(greet("stranger"))

def divide(a,b):
    if type(a) is int and type(b) is int:
        return a/b
    else:
        return "not a valid number"

print(divide(21,7)) # 3.0
# print(divide("b",7)) # not a valid number

