from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from django.views.generic import DetailView, ListView, UpdateView, CreateView, DeleteView, View
from django.shortcuts import render, HttpResponseRedirect, redirect
from .forms import *
from core.models import Servicio, Company, About, Tips, Caracteristica

from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.views.generic.dates import YearArchiveView

# Home







#-------------Usuarios-----------

class PerfilView(DetailView):
    model = User
    template_name = 'registration/perfil.html'

def registro_usuario(request):
    data = {
        'form':CustomUserForm()
    } 

    if request.method =='POST':
        formulario = CustomUserForm(request.POST)
        if formulario.is_valid():
            formulario.save()
            # autentificar al usuario y redirigirlo al inicio
            username = formulario.cleaned_data['username']            
            password = formulario.cleaned_data['password1']
            
            login(request, user)
            return redirect(to="home")
            
    return render (request, 'registration/registrar.html', data)






class HomeView(ListView): #Lista de Series
    model = Company
    template_name = 'core/abogado/home.html'
    
    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in the publisher
        servicios = Servicio.objects.all()
        context['servicios'] = servicios
        context['juridico'] = servicios.filter(tipoServicio__nombre = 'juridicos' )
        context['contable'] = servicios.filter(tipoServicio__nombre = 'contables' )
        context['company'] = Company.objects.all()
        context['about'] = About.objects.all()
        context['tips'] = Caracteristica.objects.filter(servicio__id=2)
        

        return context
    


class TeamView(ListView): #Lista de Series
    model = Servicio
    template_name = 'core/abogado/team.html'
    context_object_name = 'all_servicios'
    
    def get_context_data(self, *args, **kwargs):
              
        all_services = Servicio.objects.all()        
        
        
        return { 'all_services':all_services,  }


class ServicioDetailView(DetailView): #Detalle de Pelicula
    model = Servicio
    template_name =  'core/abogado/service_detail.html'  
    
    def get_context_data(self, **kwargs):
        pk = self.kwargs.get('pk')
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in the publisher
        
        servicios = Servicio.objects.all()
        context['juridico'] = servicios.filter(tipoServicio__nombre = 'juridicos' )
        context['contable'] = servicios.filter(tipoServicio__nombre = 'contables' )

        context['servicios'] = servicios
        context['company'] = Company.objects.all()
        context['about'] = About.objects.all()
        context['caracteristica'] = Caracteristica.objects.filter(servicio__id=pk)

        return context          


class ServicesListView(ListView): #Lista de Series
    model = Servicio
    template_name = 'core/abogado/services_list.html'
    #context_object_name = 'all_info'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in the publisher
        servicios = Servicio.objects.all()
        context['servicios'] = servicios
        context['juridico'] = servicios.filter(tipoServicio__nombre = 'juridicos' )
        context['contable'] = servicios.filter(tipoServicio__nombre = 'contables' )
        


        return context    


class ServiciosContablesView(ServicesListView):
    template_name = 'core/abogado/services_list_contables.html'


class ServiciosJuridicosView(ServicesListView):
    template_name = 'core/abogado/services_list_juridicos.html'


class ContactoListView(ServicesListView):
    
    template_name = 'core/abogado/contacto.html'   




class QuienesSomosListView(ServicesListView):
    model = About
    template_name = 'core/abogado/quienes_somos.html' 
    context_object_name = 'all_info' 
