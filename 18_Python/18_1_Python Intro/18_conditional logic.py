age = 19
isBirthday = True

if age >= 21:
    print("YOU CAN DRINK.")
    if isBirthday:
        print("HAPPY BIRTHDAY, HERE IS A FREE MARTINI!")
elif age >= 18:
    print("YOU CAN COME IN BUT NO DRINKING!")
    print("HAPPY BIRTHDAY, HERE IS A FREE APPLE JUICE!")
else:
    print("SORRY. YOU CAN'T ENTER!")