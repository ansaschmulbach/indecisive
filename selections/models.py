from django.db import models

# Create your models here.

#example class

class Category(models.Model):
    name = models.CharField(max_length=100)

class AllergenInfo(models.Model):
    vegan = models.BooleanField(default=False)
    vegetarian = models.BooleanField(default=False)
    lactose_free = models.BooleanField(default=False)
    peanut_free = models.BooleanField(default=False)

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    allergen_info = models.ForeignKey(AllergenInfo, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=300)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    menu = models.ManyToManyField(MenuItem, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

