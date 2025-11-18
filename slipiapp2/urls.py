from slipiapp2 import views
from django.urls import path

urlpatterns = [
    path('', views.online),
    path('page.html', views.page),
    path('account.html', views.accounts),
    path('account/', views.client, name='account') 
]
