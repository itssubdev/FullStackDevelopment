#  for -> nested loop
#  List Comprehension
#  Breaking Statement -> continue, break, pass

#  for loop
    # for loop 
# wap to print the following pattern using for loop
# * 
# **
# ***
# ****
# *****
for i in range(0,5):
    for j in range(0, i+1):
        print("*", end=" ")
    print()
# wap to print the multiplication table of 5
for i in range(0,11):
    print(f"5 * {i} = {5*i}")




# breaking Statement -> continue, break, pass
# break -> condition satisfied then it will break the loop
# continue -> condition not satisfied then it will continue the loop
# pass -> do nothing

# wap to print the table of 5 if the number == 25 then break the loop
print("using Break")
for i in range(0,11):
    print(f"5 * {i} = {5*i}")
    if i== 5:
        break


# wap to print the table of 5 if the number == 25 then continue the loop
print("using Continue")
for i in range(0,11):
    if i== 5:
        continue
    print(f"5 * {i} = {5*i}")  

# pass -> class, func, methods
def abc(name):
    pass

print("hello")

# wap to print the square of number from 0 to 10
# list Comprehension -> list comprehension is a way to create a list by using a for loop and a condition
# [expression for items in iterabnle if condition]

squares_number = [x**2 for x in range(0,11)]
print(squares_number)

squares_number = [x**2 for x in range(0,11) if x%2== 0]
print(squares_number)
# wap to print the table from 0 to 10 -> nested loops 
# wap to print the list in upper case
# wap to print the list in lower case
# wap to print all the even number from 0 to 100 using continue
# wap to print all the odd number from 0 to 100 using continue
# wap to print the following pattern using for loop
# *****
# ****
# ***
# **
# * 