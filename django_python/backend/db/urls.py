from django.urls import path
from . import views

urlpatterns = [
    path('db/hello', views.say_hello)
]
