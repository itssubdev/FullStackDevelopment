#  Dict -> collection of key and value pair
dict1 = {
    "name": "shishir",
    "age": 27, 
    "gender": "male",
    "isTeacher": True
}
print(dict1)
print(type(dict1))

print(dict1["name"])
print(dict1["age"])
print(dict1["gender"])
print(dict1["isTeacher"])

#update the value
dict1["name"] = "Shishir Bhandari"
print(dict1)

# methods -> keys, values, items, get, pop, popitem, clear, update

# keys -> dict1 -> key
print(dict1.keys())
# values -> dict1 -> Value
print(dict1.values())

# items -> dict1 -> key and value
print(dict1.items())

#get -> dict1 -> key and value
print(dict1.get("name"))
print(dict1.get("gender"))
print(dict1.get("isTeacher"))

#pop -> key removes and value 
print(dict1.pop("name"))
print(dict1)

# popitem -> last key and value remove
print(dict1.popitem())
print(dict1)

# clear -> provides the empty dictionary
dict1.clear()
print(dict1)
#  set(), dict -> {}
print(type(dict1))