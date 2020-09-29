# Generated by Django 3.1 on 2020-09-13 16:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='servicio',
            options={'ordering': ['nombre']},
        ),
        migrations.AlterField(
            model_name='servicio',
            name='nombre',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='servicio',
            name='tipoServicio',
            field=models.ForeignKey(default='Jurídico', on_delete=django.db.models.deletion.CASCADE, to='core.tiposervicio'),
        ),
    ]
