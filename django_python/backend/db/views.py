from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def say_hello(req):
    return render(req, 'hello.html', {'name': 'Casey'})
