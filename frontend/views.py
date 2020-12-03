from django.shortcuts import render

def index(request): 
    return render(request, 'frontend/public/index.html')

    
# Create your views here.
