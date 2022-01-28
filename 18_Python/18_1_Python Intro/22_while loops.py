num = 0

while num <= 100:
    print(num)
    num += 10
    # break
    # would have stopped the loop

print("All done")

target = 37
guess = None

while guess != target:
    guess = input("Please enter a guess: ")
    if guess == 'q' or guess == 'quit':
        break
    guess = int(guess)
    # otherwise input would be a string