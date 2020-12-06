from django.db import models

# Create your models here.

#example class
class Restaurant(models.Model):

    name = models.CharField(max_length=100)
    location = models.CharField(max_length=300)
    rating = models.DecimalField(max_digits=3, decimal_places=2)