from random import randint

guesses = 0
name = input('What is your name? ')
random_number = randint(1, 20)

print(f'Well, {name}, I am thinking of a number between 1 and 20. You have six guesses')

for i in range(6):
    guess = input('Take a guess. ')
    guesses += 1
    if int(guess) < random_number:
        print('Your guess is too low')
    elif int(guess) > random_number:
        print('Your guess is too high')
    else:
        print(f'Congratulations {name}.You guessed the number in {guesses} guesses. The number was {random_number}.')
        break

print(f'Sorry you used your six guesses. The number was {random_number}.')
