from django.urls import path
from .views import register_user, login_user, create_booking

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('book/', create_booking, name='create-booking'),
]
