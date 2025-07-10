print("Oop -> 4 Pillars in OOP -> \n1.Encapsulation, \n2.Inheritance, \n3.Polymorphism, \n4.Abstraction")
# Encapsulation -> we can hide properties and methods from outside .
# __ -> private
# _ -> protected
# methods -> get , set 
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def deposite(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        self.__balance -= amount

    def getBalance(self):
        return self.__balance
    
obj2 = BankAccount(1000)
# print(obj2.__balance)
print(obj2.getBalance())
obj2.deposite(500)
print(obj2.getBalance())
obj2.withdraw(200)
print(obj2.getBalance())
# Inheritance -> Parent ko properties and methods child ma inherit garxa
# Super()-> parent class ko constructor call garxa
class Parent:
    def __init__(self, lastname):
        self.lastname = lastname

    def PrintLastName(self):
        print(self.lastname)

class Child(Parent):
    def __init__(self, firstname, lastname):
        super().__init__(lastname)
        self.firstname = firstname

    def PrintFullName(self):
        print(self.firstname, self.lastname)
        
obj1 = Child("shishir", "bhandari")
obj1.PrintFullName()
obj1.PrintLastName()
# Polymorphism -> same method name different behaviour
# Abstraction -> hide the implementation details 
from abc import ABC, abstractmethod
# class Vehicle(ABC) -> abstract class -> instance create nai hudaina
class Vehicle(ABC):
    def __init__(self,name):
        self.name = name
    
    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass

class Bike(Vehicle):
    def start(self):
        print(f"bike {self.name} started")

    def stop(self):
        print(f"bike {self.name} stopped")


class Car(Vehicle):
    def start(self):
        print(f"car {self.name} started")

    def stop(self):
        print(f"car {self.name} stopped")

bike = Bike("TVS")
car = Car("Honda")
bike.start()
bike.stop()
car.start()
car.stop()


class Coffee(ABC):
    def make_coffee(self):
        self.boli_water()
        self.brew_coffee()
        self.add_ingredients()
        self.pour_coffee()
    
    def boli_water(self):
        print("boli water ...")

    @abstractmethod
    def brew_coffee(self):
        pass

    @abstractmethod
    def add_ingredients(self):
        pass
    
    def pour_coffee(self):
        print("pour coffee ...")

class Expresso(Coffee):
    def brew_coffee(self):
        print("brew expresso ...")

    def add_ingredients(self):
        print("add ingredients coffee before pouring ...")

class Cappuccino(Coffee):   
    def brew_coffee(self):
        print("brew Cappuccino ...")

    def add_ingredients(self):
        print("add ingredients add milk ...")

exp = Expresso()
exp.make_coffee()

cap = Cappuccino()
cap.make_coffee()


# Polymorphism -> same method name different behaviour -> inheritance 
class Animal:
    def speak(self):
        print("Animal Speaking")

class Dog(Animal):
    def speak(self):
        print("Dog Barking")

class Human(Animal):
    def speak(self):
        print("Human Speaking")

# polymorphism behaviour 
def make_sound(animal):
    animal.speak()

animals = [Dog(), Human()]
for animal in animals:
    make_sound(animal)