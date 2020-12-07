from django.urls import path
from . import views

urlpatterns = [
    path('', views.selectionsOverview, name="selections-overview"),
    path('selections-view/', views.restaurantView, name="selections-view"),
    path('selections-get/<str:id>/', views.getRestaurant, name="selections-get"),
    path('selections-create/', views.createRestaurant, name="selections-create"),
    path('selections-delete/', views.deleteRestaurant, name="selections-delete"),
    path('view-categories/', views.categoryView, name="view-categories"),
    path('view-menu-items/', views.menuItemsView, name="view-categories"),
    path('view-allergen-info/', views.allergenInfoView, name="view-categories"),
    path('create-category/', views.createCategory, name="selections-create"),
    path('create-menu-item/', views.createMenuItem, name="selections-create"),
    path('create-allergen-info/', views.createAllergenInfo, name="selections-create"),
    path('selections-yelp/', views.yelp, name="selections-yelp")
]