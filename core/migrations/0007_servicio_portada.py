# Generated by Django 3.1 on 2020-09-23 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20200922_2339'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicio',
            name='portada',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]
