not not ""
# False

not not "sd"
# True

not not 0
# False

not not 1
# True

if 12:
    print("Truthy!")
# Truthy!

if 0:
    print("Truthy!")
#

type(None)
# NoneType

not not None
# False

jobs = ['walk dog']
if jobs:
    print("Cant go home yet, have more work to do")
# Cant go home yet, have more work to do

jobs = []
if jobs:
    print("Cant go home yet, have more work to do")
#

