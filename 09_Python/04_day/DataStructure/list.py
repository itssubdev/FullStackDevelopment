# List -> collection of items 
# list is a mutable data type
list1 = [1,2,3,4,5]
# index = 4 (0, n-1) n = lenght, lenght = 5 (1, n)
print(list1)
print(list1[4]) # 5

list1[4] = 6
print(list1)

# list Methods -> append, insert, remove, pop, clear, index, count, sort, reverse
# append -> add item at the end
list1.append(7)
print(list1)
# insert -> value add at the given index
list1.insert(3, 90)
print(list1)
#Remove -> removes the value from the list whcih comes first 
list1.remove(90)
print(list1)
# pop -> removes the value from the list from the last index 
list1.pop()
print(list1)
# clear -> provides the empty list
list1.clear()
print(list1)
print(list1)
list2 = [0,9,8,7,6,5]
# index -> provides the index of the list 
print(list2.index(8))
# count -> provides the repeatation of the value
print(list2.count(5))
# sort -> sort the list
list2.sort()
print(list2)
# reverse -> reverse the list
list2.reverse()
print(list2)
list3 = [1,2,3,4,5, 6, 7,8, 9, 10]
for i in list3:
    print(i)