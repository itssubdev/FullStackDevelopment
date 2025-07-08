# # OOP -> object Oriented Programming -> 
# # programing paradishm -> 
# # real life example lai leaya ra teshko instance create garxa

# # OOP-> Object , class, 
# # class -> it is a blueprint - object
# # object -> it is an instance of a class 

# # class -> properties, methods, constructor, dunder/magic methods,
#             #  class methods, static methods
# # dursikshya class -> room, bench, number of student per class, methods printdetails -> class methods room and bench, static methods to find the numb of total students 
# class Dursikshya:
#     # room = 5
#     # bench = 20
#     # number_of_student = 7
#     # properties -> if we create variable inside a class

#     # constructor -> a special methods use to provide value to properties. it runs automatically
#     def __init__(self, room , bench, number_of_student):
#         self.room = room
#         self.bench = bench
#         self.number_of_student = number_of_student

#         print("its run automatically")

#     # def printDetails(self, location, a, b):
#     #     print(f"dursikshya {self.room} {self.bench} {self.number_of_student} {location}, {a+b}")

#     # decorators -> @classmethods, @static methods
#     @classmethod
#     def printTotal(cls, fee):
#         print(cls.room , cls.number_of_student , fee * 4)

# # object to class or print the variable 
# # obj1 = Dursikshya()
# # print(obj1.room)
# # print(obj1.bench)
# # print(obj1.number_of_student

# # obj2 = Dursikshya(5, 20, 10)
# # obj2.printDetails("kathmadnu", 2,3)
# Dursikshya.printTotal(20000)
# # pokhara = Dursikshya(2, 15, 12)
# # pokhara.printDetails("pokhara", 33, 55)

# class methosd and static methods 
class One:
    room = 3
    number_of = 5
    fee = 20000

    @classmethod
    def printTotal(cls):
        print(cls.room * cls.number_of * cls.fee * 4)

    @staticmethod
    def printSum(a,b):
        print(a+b)
One.printTotal()
One.printSum(1,2)
One.printSum(5,2)

# dunder / magic methods -> 
#  __init__ -> constructor
#  __str__ -> string representation
# when your object is printed what output should be print
class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"my name is {self.name}"
    
p = Person("hari")
print(p)
# __len__ -> length -> list
class Persons:
    def __init__(self, name):
        self.name = name

    def __len__(self):
        return len(self.name)
    
ps = Persons(["hari", "shyam", "sita"])
print(len(ps))
# __add__ -> addition
class Money:
    def __init__(self, amount):
        self.amount = amount

    def __add__(self, other):
        return Money(self.amount + other.amount)
    
    def __str__(self):
        return f"rs {self.amount}"

m1 = Money(1000)
m2 = Money(500)
print(m1+m2)

# __main__ -> main

# 4 Pillars in Python oop
# inheritance -> parent ko properties and methods child la inherit garna
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print("animal can speak")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} says woof")

dog1 = Dog("tommy")
dog1.speak()
dog1.bark()
# encapsulation
# abstraction
# polymorphishm