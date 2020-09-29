from django.contrib import admin
from .models import *


class CaracteristicaInline(admin.TabularInline):
    model = Caracteristica
    extra = 1

class ServicioAdmin(admin.ModelAdmin):
	list_display = ('nombre', 'tipoServicio')
	# list_filter = ('estatus','dpto', 'especialidad')
	ordering = ('nombre',)   
	inlines = [CaracteristicaInline, ]
admin.site.register(Servicio, ServicioAdmin)





admin.site.register(TipoServicio)  


admin.site.register(Contactanos)  
admin.site.register(About)
admin.site.register(Tips)
 