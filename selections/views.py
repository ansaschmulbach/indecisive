from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RestaurantSerializer, CategorySerializer, \
    MenuItemSerializer, AllergenSerializer
from .models import Restaurant, AllergenInfo, MenuItem, Category
import requests

@api_view(['GET'])
def selectionsOverview(request):

    selections_urls = {
        'View' : '/selections-view/',
        'Get' : '/selections-get/<str:id>/',
        'Create': '/selections-create/',
        'Delete': '/selections-delete/<str:id>/',
    }

    #Django rest framework response
    return Response(selections_urls)

@api_view(['GET'])
def restaurantView(request):
    restaurants = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def categoryView(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def menuItemsView(request):
    menuitems = MenuItem.objects.all()
    serializer = MenuItemSerializer(menuitems, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def allergenInfoView(request):
    allergenInfo = AllergenInfo.objects.all()
    serializer = MenuItemSerializer(allergenInfo, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRestaurant(request, id):
    restaurants = Restaurant.objects.get(id=id)
    serializer = RestaurantSerializer(restaurants, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createRestaurant(request):
    #request.data sends a json object
    serializer = RestaurantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def createCategory(request):
    #request.data sends a json object
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def createAllergenInfo(request):
    #request.data sends a json object
    serializer = AllergenSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def createMenuItem(request):
    #request.data sends a json object
    serializer = MenuItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteRestaurant(request, id):
    #request.data sends a json object
    restaurants = Restaurant.objects.get(id=id)
    restaurants.delete()


@api_view(['GET'])
def yelp(request):
    response = requests.get('https://api.yelp.com/v3/businesses/search/Berkeley')
    data = response.json()
    return Response(data)


