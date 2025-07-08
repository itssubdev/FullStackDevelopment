# OOP -> Object Oriented Programing -> programing paradishm -> real life example lai leaya ra teshko instance create garxa

# Class -> blueprint of an object
# object -> instance of a class 
# class ma kk huna sakxa ta
#   -> properties, methods, constructor, dunder methods, 

# methods type in class
#  simple methods
#  class methods
#  static methods

# Dunder/ magic Methods -> 
#  __init__ -> constructor
#  __str__ -> string representation
# __len__ -> length
# __add__ -> addition
# __main__ -> main

# $ pillars in python oop 
# 1. Inheritance -> Parent ko properties and methods child ma inherit garxa
# 2. Encapsulation -> we can hide properties and methods from outside .
# __ -> private
# _ -> protected
# 3. Polymorphism -> same method name different behaviour
# 4. Abstraction -> hide the implementation details

# how to create a class in python
class One:
    pass

#  how to create an object in python
abc = One()
print(type(abc))

# how to create properties and methods in class 
class Two:
    # Properties 
    name = "shishir"
    age = 27
    gender = "male"

    # methods 
    def printDetails(self):
        print(f"my name is {self.name} and age is {self.age} and gender is {self.gender}")


one = Two()
print(one.name)
one.printDetails()

# update the properties using object 
one.name = "sita"
one.age = 20
one.gender = "female"
one.printDetails()

# add 2 number in class 3 = 1 + 2
class Three:
    def add(self, num1, num2):
        return num1 + num2
    
obj1 = Three()
print(obj1.add(1, 2))

obj12 = Three()
print(obj12.add(100, 2))

# using constructor in a class four

class Four:
    name = None
    # what do you mean by a constructor?
    # - >magic methods
    #  -> automatically invoke hunxa run hunxa
    def __init__(self, a, b, names):
        self.a = b
        self.b = a
        self.name = names


    def printTotal(self):
        return self.a - self.b, self.name
    
obj3 = Four(1, 2, "shishir")
print(obj3.printTotal())

# constructor runs when object is created 
class Five:
    def __init__(self):
        print("constructor runs automatically")

obj5 = Five()

# what do you mean by decorators in python -> it is a function which is used to modify the behaviour of a function

# Decorators in python and who to writre and use them
# @ -> decorator to represent a function
# class Methods 
class Six:
    name = "hari"
    age = 27
    @classmethod
    def PrintClassMethods(cls):
        print(f"my name is {cls.name} and age is {cls.age}")

Six.PrintClassMethods()

# static Methods 
class Seven:
    name = "hari"
    age = 27
    @staticmethod
    def PrintStaticMethods(a,b):
        print(a+b)

Seven.PrintStaticMethods(5,55)