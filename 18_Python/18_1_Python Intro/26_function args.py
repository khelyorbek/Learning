def three_things(a,b,c):
    print("HI!")

# 3 arguments just like function wanted
three_things(1,2,3)
# HI!

# 2 args, errors out
#three_things(1,2)
# line 7, in <module>
#     three_things(1,2)
# TypeError: three_things() missing 1 required positional argument: 'c'

# 4 args, errors out
# three_things(1,2,3,4)
# line 13, in <module>
#     three_things(1,2,3,4)
# TypeError: three_things() takes 3 positional arguments but 4 were given

# very hard to remember the exact order of what things to pass
def send_email(to_email,from_email,subject,body):
    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        _____________________
        body: {body}
    """    
    print(email)
    
# python names it easy by using NAMED ARGUMENTS / KEYWORD ARGUMENTS where we use the name of the argument
send_email(subject="HELLO",to_email="stranger@gmail.com",from_email="ely@humans.com",body="Hello stranger! How are you?")

# default value of functions. power defaults to 2
def power(num,power=2):
    return num ** power;

