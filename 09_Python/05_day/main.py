# Function -> A function is a block of code that performs a specific task or set of tasks when it is called
#  normal function run 
# def Function_Name(parameter1,parameter2):
    # body
# Function_Name(arg1,arg2)

def print_Name(name):
    print(name)
print_Name("shihsir")
print_Name("hari")
print_Name("ram")

# Parameter and Argument in python function 
# Parameter -> A variable that is defined in the function declaration 
# argument -> A value that is passed to the function when it is called 

# without parameter function 
def printName():
    print("shishir")
printName()
printName()
printName()

# Return wala function 
def abc(a,b):
    return a+b
print(abc(5,6))
print(abc(10,40))

# function with out parameter but have return type
def abcd():
    return 5+6
print(abcd())
print(abcd())

# Function types (parameter and return type)
# 4 types -> 
# parameter with return type
# no parameter with return type
# parameter without return type
# no parameter and  no return type

# Parameter TYpe in python 
# 1. Positional Parameter -> jasto prameter rakhnu bhayako xa testai args ma pass gareko xa -> default
def Details(name, age, gender):
    return f"my name is {name} and age is {age} and gender is {gender}"
print(Details("shishir", 27, "male"))
print(Details("27", "male", "Shishir"))

# 2. Named Parameter
def Detail(name, age, gender):
    return f"my name is {name} and age is {age} and gender is {gender} from Named parameter"
print(Detail(age = 27, name = "Shishir", gender="male"))

# 3. Default Parameter
def Default_Default(name, age, gender = "male"):
        return f"my name is {name} and age is {age} and gender is {gender} from Default parameter"
print(Default_Default("Shishir", 27))
print(Default_Default("sita", 22, "female"))

# 4. Variable Length Parameter (*args) -> multi argument pass gareko xa
def Variable_Length(*args):
     return args # tuple type return gareko xa
print(Variable_Length(1,2,3,4,5,6))

# 6. Keyword Length Parameter (**kwargs) -> multi key and value
def Keyword_Length(**kwargs):
    return kwargs # dict type return gareko xa
print(Keyword_Length(name = "shishir", age = 27, gender = "male"))

# lambda -> a small anonymous function
# lambda parameter: expression
# without lmbda functuion 
def a(x):
    return x**2
print(a(5))

# lambda have a default return
abcdef = lambda x : x**2
print(abcdef(5))

# Recursion -> A function calling itself 965 -> recursion error 
# 5,4,3,2,1
def recursions(n):
    if n== 0:
          return 
    else: 
        print(n)
        recursions(n-1)

recursions(5)



