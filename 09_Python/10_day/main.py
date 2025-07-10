# Exception handling and File handling 
# Exception -> error -> manage error
print("hello world")
# Exception handling / error handler
try:
    print(10/0)
except ZeroDivisionError as e:
    print(e)
except Exception as e:
    print(e)
else:
    print("else ...")
finally:
    print("finally ...")
print("bye world")

# File handling -> open, read, write, close, import os -> delete
# mode -> r, w, a, r+, w+ -> read and write, write and read
fs = open("09_Python/10_day/hello.txt", mode="r")
abc = fs.read()
print(abc)

fs = open("09_Python/10_day/one.txt", mode="w")
fs.write("hello world \n how are you \n i am fine")
fs.close()

fss = open("09_Python/10_day/one.txt", mode="w+")
fss.write("hello world \nhow are you \ni am fine")
fss.seek(0)
print(fss.read())
fss.close()

fssappend = open("09_Python/10_day/one.txt", mode="a+")
fssappend.write("\n"+abc)
fssappend.seek(0)
print(fssappend.read())
fssappend.close()

# import os 
# os.remove("hello.txt")

# wap to print the tabel from 10 to 20 using file handling -> 11 -> 11.txt , 12-> 12.txt -> seprate seprate table 
def table(num, num2):
    for i in range(num, num2):
        fs = open(f"09_Python/10_day/table11-20/{i}.txt", mode="w")
        for j in range(1,11):
            fs.write(f"{i} * {j} = {i*j}\n")
        fs.close()
table(11,21)

# wap to print the table from 1 to 10 using file handling 
fs = open("09_Python/10_day/table11-20/table.txt", mode="w")
for i in range(1,11):
    for j in range(1,11):
        fs.write(f"{i} * {j} = {i*j}\n")
fs.close()

# wap using oop -> 4 pillars, exception handling , file handling -> banking application -> user -> account -> deposit , withdraw , balance, transfer -> account record -> json format -> file handling -> read and write

# download xampp
