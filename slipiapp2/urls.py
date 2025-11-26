from slipiapp2 import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.online),
    path('page.html', views.page),
    path('account.html', views.accounts),
    path('accounts/', views.accounts, name='accounts'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)