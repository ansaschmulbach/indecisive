from django.urls import path
from . import views

urlpatterns = [
    path('', views.selectionsOverview, name="selections-overview"),
    path('selections-view/', views.restaurantView, name="selections-view"),
    path('selections-get/<str:id>/', views.getRestaurant, name="selections-get"),
    path('selections-create/', views.createRestaurant, name="selections-create"),
    path('selections-delete/', views.deleteRestaurant, name="selections-delete")
]