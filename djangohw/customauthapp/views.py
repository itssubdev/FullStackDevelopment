from django.shortcuts import render, redirect
from .models import CustomUser, Contact
from django.contrib.auth import authenticate, login , logout
from django.contrib import messages
from blog.models import Blog, Comment, Category

# 2 types -> Custom User Form , Forms.py ->> bootstrap forms
# @login_required
from django.contrib.auth.decorators import login_required
def logins(request):
    if request.method == "POST":   
        email = request.POST.get("email")
        password = request.POST.get("password")
        user= authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            if user.is_superuser:
                return redirect("admin_page")
            messages.success(request, "Login Success")
            return redirect("profiles")
        else:
            messages.error(request, "Invalid Credentials")
            return redirect("login")
    return render(request, "login.html")

def register(request):
    if request.method =="POST":
        name = request.POST.get("name")
        email= request.POST.get("email")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")
        phone_number = request.POST.get("phone_number")
        user_profile = request.POST.get("user_profile")
        if password != confirm_password:
            messages.error(request, "Passwords do not match")
            return redirect("register")
        if CustomUser.objects.filter(email=email).exists():
            messages.error(request, "Email already exists")
            return redirect("register")
        user = CustomUser.objects.create_user(email=email, password=password, name=name, phone_number=phone_number, user_profile=user_profile)
        user.save()
        messages.success(request, "Registration Success")
        return redirect("login")
    return render(request, "register.html")
            
@login_required
def logouts(request):
    logout(request)
    return redirect("login")

@login_required
def profiles(request):
    users = request.user
    context = {
        "users": users
    }
    return render(request, "profile.html", context)

@login_required
def update_profile(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email= request.POST.get("email")
        phone_number = request.POST.get("phone_number")
        user_profile = request.POST.get("user_profile")
        user = request.user
        user.name = name
        user.email = email
        user.phone_number = phone_number
        user.user_profile = user_profile
        user.save()
        messages.success(request, "Profile Updated")
        return redirect("profiles")
    return render(request, "update_profile.html")

@login_required
def change_password(request):
    if request.method == "POST":
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")
        if password != confirm_password:
            messages.error(request, "Passwords do not match")
            return redirect("change_password")
        user = request.user
        user.set_password(password)
        user.save()
        messages.success(request, "Password Updated")
        return redirect("profiles")
    return render(request, "change_password.html")

# Admin panel
@login_required
def admins_page(request):
    users = CustomUser.objects.all()
    blogs = Blog.objects.all()
    comments = Comment.objects.all()
    categories = Category.objects.all()
    contacts = Contact.objects.all()

    context = {
        "users": users,
        "usercount": users.count(),
        "blogs": blogs,
        "blogcount": blogs.count(),
        "comments": comments,
        "commentcount": comments.count(),
        "contacts": contacts,
        "contactcount": contacts.count(),
        "categories": categories,
        "categorycount": categories.count(),
        
    }
    return render(request, "admin.html", context)
