# tuple -> collection of imutable data type
tuple1 = (1,2,3,4,5, 2, 2, 2, 2)
print(tuple1)
print(tuple1[0])
# cannot do this things
# tuple1[0] = 10
# print(tuple1)
# tuple Methods -> count, index
print(tuple1.count(2)) # common value print garxa
print(tuple1.index(2)) # common value ka index print garxa
# 1. Wap to add value in the last using list so convert the tuple to list and use append to add values and then convert back to tuple
tuple2 = (1,2,3,4,5, 6, 7,8, 9, 10)
for i in tuple2:
    print(i)
# wap to print the sum of total number in a tuple 3 = (1,2,3,4,5, 6, 7,8, 9, 10) = 55 also using for loop and while loop 