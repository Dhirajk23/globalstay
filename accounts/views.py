from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Booking
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt  # Only needed for login/register if CSRF not handled

# ✅ REGISTER USER
@csrf_exempt
@api_view(['POST'])
def register_user(request):
    data = request.data
    if User.objects.filter(username=data['email']).exists():
        return Response({'error': 'User already exists'}, status=400)

    user = User.objects.create_user(
        username=data['email'],
        email=data['email'],
        password=data['password'],
        first_name=data.get('name', '')
    )
    return Response({'message': 'User registered successfully'})

# ✅ LOGIN USER
@csrf_exempt
@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')

    try:
        user = authenticate(username=email, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'})
        else:
            return Response({'error': 'Invalid credentials'}, status=401)
    except Exception as e:
        return Response({'error': str(e)}, status=500)

@csrf_exempt
@api_view(['POST'])
def create_booking(request):
    data = request.data
    user = request.user if request.user.is_authenticated else None  # fallback to None

    try:
        booking = Booking.objects.create(
            user=user,
            name=data['name'],
            check_in=datetime.strptime(data['checkIn'], "%Y-%m-%d").date(),
            check_out=datetime.strptime(data['checkOut'], "%Y-%m-%d").date(),
            room_type=data['roomType']
        )
        return Response({'message': 'Booking saved successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=400)
