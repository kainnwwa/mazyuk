from django.shortcuts import render
from .models import Client
from .models import Merchandise

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
def online(request):
    
    merchandises = Merchandise.objects.all()
    return render(request, 'all.html', {'Merchandises': merchandises})

from django.shortcuts import render
from .models import Merchandise

def online(request):
    search_query = request.GET.get('search', '')
    merchtype_filter = request.GET.get('merchtype', '')
    
    merchandises = Merchandise.objects.all()
    
    if search_query:
        merchandises = merchandises.filter(name__icontains=search_query)
    if merchtype_filter:
        merchandises = merchandises.filter(merchtype=merchtype_filter)
    
    context = {
        "Merchandises": merchandises,
        "search_query": search_query,
        "merchtype_filter": merchtype_filter,
    }
    
    return render(request, 'all.html', context)
