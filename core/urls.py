from django.urls import path


from .views import *


urlpatterns = [
#users..
path('registro/', registro_usuario, name='registro_usuario'),
path('user/<int:pk>/', PerfilView.as_view(),   name='perfil_usuario'),

# urls for home

path('', HomeView.as_view(), name='home'),
path('abogados', HomeView.as_view(), name='home_abogados'),
path('contacto', ContactoListView.as_view(), name='contacto'),
path('quienes-somos', QuienesSomosListView.as_view(), name='quienes_somos'),

path('team', TeamView.as_view(), name='team'),
path('services', ServicesListView.as_view(), name='services_list'),
path('servicios/contables', ServiciosContablesView.as_view(), name='services_list_contables'),
path('servicios/juridicos', ServiciosJuridicosView.as_view(), name='services_list_juridicos'),

path('abogados/<int:pk>/detail/', ServicioDetailView.as_view(), name='service_detail'),

]
