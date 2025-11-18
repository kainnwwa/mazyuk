from django.shortcuts import render
from .models import Client

def online(request):
    return render(request, 'all.html')

def page(request):
    return render(request, 'page.html')

def accounts(request):
    return render(request, 'account.html')

def client(request):
    Client_nickname = chr(request.GET.get('nickname', 2))
    
    Client_from_db = Client.objects.all()[Client_nickname - 1]
    
    return render(request, 'account.html', {
        'Client': Client_from_db
    })
    