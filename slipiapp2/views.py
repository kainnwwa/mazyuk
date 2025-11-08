from django.shortcuts import render

def online(request):
    return render(request, 'all.html')

def page(request):
    context = {

    }
    return render(request, 'page.html', context)