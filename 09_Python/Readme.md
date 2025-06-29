# My Python Learning Journey

This repository documents my journey learning the Python programming language, starting from the very basics. It serves as a personal study guide, containing notes, code snippets, and a roadmap of projects to build.

## Table of Contents

- [Day 1: Python Fundamentals](#day-1-python-fundamentals)
  - [Why Use Python?](#why-use-python-advantages)
  - [Common Uses of Python](#common-uses-of-python)
  - [Setup Requirements](#setup-requirements)
- [Core Concepts Roadmap](#core-concepts-roadmap)
- [Project To-Do List](#project-to-do-list)
- [Day 2: Core Syntax and Concepts](#day-2-core-syntax-and-concepts)
  - [Indentation](#indentation)
  - [Interpreter vs. Compiler](#interpreter-vs-compiler)
  - [Comments](#comments)
  - [Variables and Assignments](#variables-and-assignments)
  - [Python Data Types](#python-data-types)

---

## Day 1: Python Fundamentals

Notes from the first day of exploring the Python ecosystem.

### Why Use Python? (Advantages)

*   **Easy to Read & Write:** Syntax is clean, readable, and close to English.
*   **Versatile:** Excellent for web development, data science, automation, AI, and more.
*   **Large Community:** A massive global community means plenty of free libraries, frameworks, and support.
*   **Beginner-Friendly:** An ideal language for new programmers to start with.

### Common Uses of Python

*   Web Development (Server-side)
*   Data Science & Machine Learning
*   Automation & Scripting
*   Software Development & GUIs

### Setup Requirements

1.  **Python Interpreter:** The core engine that runs Python code. Downloaded from [python.org](https://www.python.org/).
2.  **Code Editor:** A program for writing code. **Visual Studio Code (VS Code)** is the recommended tool.

---

## Core Concepts Roadmap

This is the list of key terminologies I will be learning.

1.  **Syntax:** The grammatical rules of the language.
2.  **Semantics:** The meaning and logic behind the syntax.
3.  **Interpretation:** Executing code line by line.
4.  **Execution:** The process of a computer running a program's instructions.
5.  **Variables:** Named containers for storing data.
6.  **Data Types:** The classification of data (e.g., number, text, etc.).
7.  **Operators:** Symbols that perform operations (`+`, `-`, `==`, `>`).
8.  **Conditionals:** Code that runs only if a condition is met (`if`/`else`).
9.  **Loops:** Code that runs repeatedly (`for`/`while`).
10. **Functions:** Reusable blocks of code.
11. **Modules:** A Python file (`.py`) with code that can be imported elsewhere.
12. **Packages:** A collection of related modules.
13. **OOP (Object-Oriented Programming):** A programming paradigm using objects and classes.
14. **Exception Handling:** Managing errors to prevent program crashes (`try`/`except`).
15. **File Handling:** Reading from and writing to files.
16. **Database Handling:** Connecting to and managing data in databases.
17. **Object:** An instance of a class.

---

## Project To-Do List

A list of projects to apply the concepts learned.

1.  **GUI Calculator**
    *   **Concepts:** Functions, Conditionals, basic GUI with `Tkinter`.
2.  **CLI To-Do List**
    *   **Concepts:** Object-Oriented Programming (OOP), File Handling, Exception Handling.
3.  **Live Weather App**
    *   **Concepts:** Functions, APIs, handling external data (JSON).

---

## Day 2: Core Syntax and Concepts

Diving deeper into the fundamental rules and building blocks of Python.

### Indentation

In Python, indentation is not for style; it is **syntax**. It is used to define a block of code. The standard is to use **4 spaces** for each level of indentation.

```python
a = 10
if a % 2 == 0:
    # This block is executed only if 'a' is even
    print("The code is inside the 'if' block.")
    print("a is an even number.")
else:
    # This block is executed only if 'a' is not even
    print("The code is inside the 'else' block.")
    print("a is an odd number.")
```

### Interpreter vs. Compiler

*   **Interpreter:** Executes code line by line. If it finds an error, it stops. This is how Python behaves from a user's perspective.
*   **Compiler:** Translates the entire program into machine code first, creating an executable file.

**Note:** Technically, modern Python is both. It first *compiles* your `.py` file into bytecode (`.pyc`), which is then executed by the Python *interpreter* (the Python Virtual Machine). For beginners, it's easiest to think of it as an **interpreted language**.

### Comments

Comments are notes for humans that are ignored by the interpreter.

```python
# This is a single-line comment.

"""
This is a multi-line comment, also known as a docstring.
It can span multiple lines and is great for explaining
complex functions or modules.
"""

'''
This also works for multi-line comments
using single quotes.
'''
```

### Variables and Assignments

*   **Variable:** A named container for storing data in memory.
*   **Assignment:** The process of placing a value into a variable using the equal sign (`=`).

```python
# 'name' is the variable, "Shishir" is the value assigned to it.
name = "Shishir"
age = 27
is_learning = True

print(name)
print(age)
print(is_learning)
```

### Python Data Types

Data types define the kind of value a variable can hold. You can check a variable's type using the `type()` function.

#### 1. Text Type (`str`)
A sequence of characters, enclosed in single or double quotes.
```python
details = "My name is Shishir"
print(details)
print(type(details))
# Output: <class 'str'>
```

#### 2. Numeric Types (`int`, `float`, `complex`)
*   **`int` (Integer):** Whole numbers.
    ```python
    my_integer = 10
    print(my_integer)
    print(type(my_integer))
    # Output: <class 'int'>
    ```
*   **`float` (Floating-Point):** Numbers with a decimal point.
    ```python
    my_float = 10.40
    print(my_float)
    print(type(my_float))
    # Output: <class 'float'>
    ```
*   **`complex`:** Numbers with a real and an imaginary part.
    ```python
    my_complex = 1 + 3j
    print(my_complex)
    print(type(my_complex))
    # Output: <class 'complex'>
    ```

#### 3. Sequence Types (`list`, `tuple`)
*   **`list`:** An ordered and **changeable** collection. Allows duplicate members.
    ```python
    my_list = ["apple", "banana", "cherry"]
    print(my_list)
    print(type(my_list))
    # Output: <class 'list'>
    ```
*   **`tuple`:** An ordered and **unchangeable** collection. Allows duplicate members.
    ```python
    my_tuple = ("apple", "banana", "cherry")
    print(my_tuple)
    print(type(my_tuple))
    # Output: <class 'tuple'>
    ```

#### 4. Mapping Type (`dict`)
A collection of key-value pairs. It is ordered (since Python 3.7) and changeable.
```python
my_dict = {"name": "Shishir", "age": 27}
print(my_dict)
print(type(my_dict))
# Output: <class 'dict'>
```

#### 5. Set Type (`set`)
An unordered, unindexed, and unchangeable* collection with **no duplicate members**. (*Set items are unchangeable, but you can add/remove items).
```python
my_set = {"apple", "banana", "cherry"}
print(my_set)
print(type(my_set))
# Output: <class 'set'>
```

#### 6. Boolean Type (`bool`)
Represents one of two values: `True` or `False`.
```python
is_active = True
print(is_active)
print(type(is_active))
# Output: <class 'bool'>
```

#### 7. None Type (`NoneType`)
Represents the absence of a value.
```python
no_value = None
print(no_value)
print(type(no_value))
# Output: <class 'NoneType'>
```