from django.shortcuts import render

# Create your views here.

from django.shortcuts import render

def login_view(request):
    return render(request, 'usuarios/login.html')

def registro_view(request):
    return render(request, 'usuarios/registro.html')