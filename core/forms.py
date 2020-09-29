from django import forms
from django.forms import ModelForm
from .models import *
import	datetime
from django.contrib.auth.forms import UserCreationForm


# class GeneroForm(forms.ModelForm):
#     class Meta:
#         model = Genero
#         fields = ['nombre']

# class PeliculaForm(forms.ModelForm):
# 	nombre = forms.CharField(
# 				    min_length=2, max_length=200, 
# 				    widget=forms.TextInput(
# 				   		    attrs={
# 				   		   	   "placeholder": "Ej: El señor de Los Anillos"
# 				   		   	}
# 				   		)				   	 
# 				   )
					

# 	duracion = forms.IntegerField(min_value=5, max_value=500)
# 	sinopsis = forms.CharField(
# 					required=False, 
# 					widget=forms.Textarea(
# 							attrs={
# 								"placeholder": "sinopsis"
# 							}
# 					))
	 
# 	class Meta:
# 		model = Pelicula
# 		fields = ['nombre', 'duracion', 'sinopsis', 'estreno', 'genero', 'caratula']

# 		widgets = {
# 			'estreno':forms.SelectDateWidget(years=range(1970,2022)),

			
# 		}

# 	def clean_estreno(self):
# 		fecha = self.cleaned_data['estreno']

# 		if fecha > datetime.date.today():
# 			raise forms.ValidationError("La fecha no puede ser mayor al dia de hoy")

# 		return fecha		


class CustomUserForm(UserCreationForm):
	pass