vegan_no_nos = ['eggs','meat','milk','fish','figs']

vegan_no_nos[2:4:1]
# ['milk','fish']

nums = list(range(0,100,1))
# nums from 0-100

nums[50:60:1]
# [50,51,52,53,54,55,56,57,58,59]
# Start is inclusive (we get 50). End is not inclusive (we don't get 60).

nums[90:]
# Gives everything starting with 90 moving forward

nums[90::2]
# Gives everything starting with 90 moving forward with a step of 2

nums[:10]
# Gives first 10 elements

nums[:10:5]
# Gives first 10 elements with a step of 5

nums[::5]
# Gives all numbers from start to end with a step of 5

nums[::-10]
# Going backwards with a step of 10

nums[10:20:-1]
# Will not work. Because you cannot go backward from 10 to 20

nums[20:10:-1]
# Will work because we CAN go backwwards from 20 to 10