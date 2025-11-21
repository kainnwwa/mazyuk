from django.shortcuts import render
from .models import Client

def online(request):
    return render(request, 'all.html')

def page(request):
    return render(request, 'page.html')

def accounts(request):
    return render(request, 'account.html')

def accounts(request):
    client_obj = Client.objects.get(id=5)
    
    return render(request, 'account.html', {
        'client': client_obj
    })