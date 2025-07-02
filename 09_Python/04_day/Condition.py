# Conditions
# Loops
# Functions 
# Conditions -> if , elif , else , match -> switch
# Loops -> for , while  -> nested Loop
# Functions -> def -> return -> arguments -> parameter
# normal statement 
if True:
    print("true")
else:
    print("false")
# wap to print to check if the given user input in which 1-20, 20-40, 40-60, 60-80, 80-100
number = int(input("Enter a number: "))
if number <=20:
    print("1-20")
if number <=40:
    print("20-40")
if number <=60:
    print("40-60")
if number <=80:
    print("60-80")
else:
    print("80-100")

number = int(input("Enter a number: "))
if number <=20:
    print("1-20")
elif number <=40:
    print("20-40")
elif number <=60:
    print("40-60")
elif number <=80:
    print("60-80")
else:
    print("80-100")

# Match  -> switch 
days = input("Enter a day: ")
match days:
    case "sunday":
        print("it's sunday")
    case "monday":
        print("it's monday")
    case "tuesday":
        print("it's tuesday")
    case "Wednesday":
        print("it's Wednesday")
    case default:
        print("it's not a weekday")

# Assignment for python 
# 1. Wap to check if the given number is odd or even
# 2. wap to check if the given number is prime or not
# 3. wap to check if the given number is armstrong or not
# 4. wap to check if the given number is palindrome or not
# 5. wap to check if the given number is perfect or not
# 6. wap to check if the given number is fibonacci for loop 
# 7. wap to check if the given number is perfect square or not
# 8. wap to program to check the given marks of the user and grade them accordingly
# 9. wap to check which day is today using elif
# 10. wap to check which month is today using match
