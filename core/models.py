from django.db import models
from django.contrib.auth.models import User


class TipoServicio (models.Model):
    nombre = models.CharField(max_length=100)
    def __str__(self):             
        return self.nombre 



class Item(models.Model):
    nombre = models.CharField(max_length=100)

class Company(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    descripcion = models.TextField(blank = True, verbose_name='Descripcion del sitio')
    logo = models.ImageField(blank = True)

class Contactanos(models.Model):
    nombre = models.CharField(max_length=50)
    email = models.EmailField()
    telefono = models.CharField(max_length=50)
    mensaje = models.TextField(blank = True, verbose_name='Mensaje')
   
   
     
class Servicio(models.Model):
    tipoServicio = models.ForeignKey(TipoServicio, on_delete=models.CASCADE, default='Jurídico' )
    icono = models.CharField(max_length=100, default='ion-android-bookmark')
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank = True, verbose_name='Descripcion del servicio' ) 
    portada = models.ImageField(blank = True)    
    imagen = models.ImageField(blank = True)
    def __str__(self):             
        return self.nombre 

    class Meta:
        ordering = ['nombre'] 

class Caracteristica (models.Model):
    nombre = models.CharField(max_length=300)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE, related_name = 'caracteristicas' )
    def __str__(self):             
        return self.nombre            


class About (models.Model):    
    titulo = models.CharField(max_length=100)    
    descripcion = models.TextField(blank = True, verbose_name='descripcion')
    mision = models.TextField(blank = True, verbose_name='mision')
    vision = models.TextField(blank = True, verbose_name='vision')
    historia = models.TextField(blank = True, verbose_name='historia')
    portada = models.ImageField(blank = True)


    imagen = models.ImageField(blank = True)
    def __str__(self):             
        return self.titulo    
         

class Tips (models.Model):
    nombre = models.CharField(max_length=100)
    about = models.ForeignKey(About, on_delete=models.CASCADE, related_name = 'tips' )
    def __str__(self):             
        return self.nombre    