# In Python -> Indentation is used to define a block of code (tabs or 1 space)
# Python is a Interpreted Language -> it is a process of executing the code line by line
print("Hello world")
# Syntax -> A set of rules for writtign a program

# Keywords -> A set of reserved words that cannot be used as variable names
#          -> print, input, for , while , if , else , break , continue , pass , 
#             return , def , class , try , except , finally , raise

# Interpreture and Compiler in Python -> 
# Interpreter -> Python interpreter 
# Compiler -> Python compiler

# what do you mean by Interpreture -> it is a process of executing the code line by line
# what do you mean by Compiler -> it is a process of converting the code into machine code
print("bye")

# Python is a Compiled Language, Interpreted Language which -> both of them are used to execute the code

# Syntax -> A set of rules for writtign a program
# Python Rules -> 
# 1. Indentation -> It is used to define a block of code
a = 10
if a%2==0:
    print("even")
else:
    print("odd")
# 2. Comments -> It is used to add notes to the code
# 3. Naming Conventions -> It is used to give names to the variables and functions
# 4. Data Types -> It is used to define the data types of the variables
# 5. Operators -> It is used to perform operations on the variables
# 6. Functions -> It is used to define a function
# 7. Classes -> It is used to define a class
# 8. Modules -> It is used to define a module
# 9. Packages -> It is used to define a package

## Comment in Python -> a Messsage or note in code which will not be executed and ignore by the interpreter
# single line comment -> 
# multi line comment -> 
"""
    multi quotaion
    multi 
    line 
    comment
"""
'''
    single quotaion
    multi 
    line 
    comment
'''

# Variables and Assignments
# vaiables -> a container for storing data or values in RAM
# assignment -> a process of assigning a value to a variable
name = "Shishir"
print(name)
age = 27
print(age)
gender = "Male"
print(gender)
details = """
my name is Shishir
my age is 27
my gender is Male
"""
ab = 0
print(details)

# Data Types 
# 1. Numeric -> int, float, complex
# 2. Squencial -> str
# 3. Boolean -> bool
# 4. None -> None
# 5. Mapping -> dict, list, tuple,
# 6. Set -> set

# Numeric -> int , float, Complex
abc = 10
print(abc)
print(type(abc))
abc = 10.40
print(abc)
print(type(abc))
abc = 1+ 3j
print(abc)
print(type(abc))