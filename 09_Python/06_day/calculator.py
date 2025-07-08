def add(a,b):
    return a+b

def sub(a,b):
    return a-b

def mul(a,b):
    return a*b

def divide(a,b):
    if b==0:
        return "can't divide by zero"
    return a/b

def calculator():
    print("welcome to calculator")
    print("choose the operation")
    print("1. add")
    print("1. sub")
    print("1. mul")
    print("1. div")

    while True:
        choices = input("Enter your choice (1/2/3/4): ")
        if choices in ('1', '2', '3', '4'):
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter Second number: "))
            if choices =="1":
                print(f"Addition of Result: {add(num1,num2)}")
            elif choices =="2":
                print(f"Subtraction of Result: {sub(num1,num2)}")
            elif choices =="3":
                print(f"Multiply of Result: {mul(num1,num2)}")
            elif choices =="4":
                print(f"Divide of Result: {divide(num1,num2)}")
        else:
            print("Invalid input")
        
        cont = input("Do you want to continue? (yes/no): ")
        if cont.lower() == "no":
            break

calculator()

# wap to print that print total amount of simple interest 
# wap to print bmi of a person = weight/height^2
# wap to print the area of a circle
# wap to print the area of a rectangle
# wap to print the total age of a person  = ask birth date - current date
# wap to print or conver the celcus to fahrenheit and vice versa

