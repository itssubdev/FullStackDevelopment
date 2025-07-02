print("Data Types in python")
# Data Types 
# 1. Numeric -> int, float, complex
# 2. Squencial -> str
name = "shishir"
# What do you mean by string ? -> A squencial of characters
# how to make a sting in python -> '', "", """ """
name = 'hari'
names = """
    my name is 
    Shihsir Bhandari
"""
print(name)
print(type(name))

# String Concatination and String Formatting
print("my name is " + name + "1001") # rule only string can be added 

print(f"my name is {name} {1001}")
# String Methods -> len, find, replace, upper, lower, strip
print(len(name)) # lenght of the string or total character 
print(name.find("i")) # find the index of the character
print("replace",name.replace("i", "u")) # replace the character
print(name.upper()) # conver to UPPER case
print(name.lower()) # conver to lower case
# strip -> remove the white space
details = "hello my name is shishir bhandari"
print(details.strip())
# 3. Boolean -> bool
# -> A VAriable can be true or false
abc = True
print(abc)
print(type(abc))
# 4. None -> None
abcd = None
print(abcd)
# 5. Mapping -> dict, list, tuple,
list1 = [1,2,3,4,5] # list is a collection of items. list always start with index 0
print(type(list1))
print(list1)
# Tuple -> tuple -> Collection of items. tuple is immutable
tuple1 = (1,2,3,4,5)
print(type(tuple1))
print(tuple1)
# Dict -> Collection of key value pairs
dict1 = {
    "name" : "shishir",
    "age" : 27
}
print(type(dict1))
# 6. Set -> set -> collection of unique items
set1 = {1,2,3,4,5,1}
print(type(set1))
print(set1)


# Range -> range -> collection of numbers
range1 = range(10)
print(type(range1))

# Input() -> Str()
name = input("Enter your name: ")
age = input("Enter your age: ")
print(f"my name is {name} and my age is {age}")
# Type Conversion in python
# str() -> convert to string
# int() -> convert to integer
# float() -> convert to float
# bool() -> convert to boolean
# complex() -> convert to complex
# list() -> convert to list
# tuple() -> convert to tuple
# set() -> convert to set
# dict() -> convert to dictionary
number1 = int(input("Enter a Number 1: "))
number2 = int(input("Enter a Number 2: "))
print(number1 + number2)

# Operators in python
# Arithmetic Operators -> +, -, *, /, %, **, //
print(5+5) # 10
print(5-5) # 0 
print(5*5) # 25
print(5/5) # 1.0
print(5%5) # 0
print(5**5) # 3125 -> power 2**5 = 2*2*2*2*2 = 32
print(5//5) # 1 -> most of the time if the value is not in decimal output will be in int]

# Comparison Operators -> ==, !=, >, <, >=, <=
# -> it compare 2 or more values and return a boolean value
# -> True or False
print(5 == 5) # True
print(5 != 5) # False
print(5 > 5) # False
print(5 < 5) # False
print(5 >= 5) # True
print(5 <= 5) # True

# Logical Operators -> and, or, not
# -> we caompare 2 or more value according to the condition and return a boolean value
# and Gate
print(True and True) # True
print(False and True) # False
print(True and False) # False
print(False and False) # False
print("OR")
print(True or True) # True
print(False or True) # True
print(True or False) # True
print(False or False) # False
print("not gate")
print(not True) # False
print(not False) # True
# Identity Operators -> is, is not
# -> it compare 2 values and return a boolean value
# -> True or False
print(5 is 5) # True
print(5 is not 5) # False
# Membership Operators -> in, not in
# -> it compare 2 values and return a boolean value
# -> True or False
print("membership")
print(5 in list1) # True
print(5 not in list1) # False
# Bitwise Operators -> &, |, ^, ~, <<, >>
# -> bimary operations -> 0 and 1
print(5 & 5) # 5
print(5 | 5) # 5
print(6 ^ 5) # 0
# Assignment Operators -> =, +=, -=, *=, /=, %=, **=, //=
# -> it returs number of operands
abcde = 5
abcde += 5 # abcce = 5+5 
print(abcde) # 10
abcde -= 5 # abcce = 5-5 
print(abcde) # 5
abcde *= 15 # abcce = 5*15 
print(abcde) # 75
abcde /= 5 # abcce = 75/5 
print(abcde) # 15
abcde %= 5 # abcce = 15%5 
print(abcde) # 0
abcde **= 5 # abcce = 0**5 
print(abcde) # 0
abcde //= 5 # abcce = 0//5 
print(abcde) # 0
# Ternary Operators -> a if condition else b
print(5 if 5>5 else 6) # 6
