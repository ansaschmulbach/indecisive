from django.urls import path
from . import views

urlpatterns = [
    path('', views.selectionsOverview, name="selections-overview"),
    path('selections-view/', views.restaurantView, name="selections-view"),
    path('selections-get/<str:id>/', views.getRestaurant, name="selections-get"),
    path('selections-create/', views.createRestaurant, name="selections-create"),
    path('selections-delete/', views.deleteRestaurant, name="selections-delete"),
    path('view-categories/', views.categoryView, name="view-categories"),
    path('view-menu-items/', views.menuItemsView, name="view-menu-items"),
    path('view-allergen-info/', views.allergenInfoView, name="view-allergen-info"),
    path('create-category/', views.createCategory, name="create-category"),
    path('create-menu-item/', views.createMenuItem, name="create-menu-item"),
    path('create-allergen-info/', views.createAllergenInfo, name="create-allergen-info"),
    path('filter-menu/<str:id>/', views.filter_with_menu_id, name="filter-menu"),
    path('num-menu-items/', views.num_menu_id, name="num_menu_items"),


    path('selections-yelp/', views.yelp, name="selections-yelp")
]