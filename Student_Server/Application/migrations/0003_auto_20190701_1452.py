# Generated by Django 2.2.2 on 2019-07-01 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Application', '0002_auto_20190630_1358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='dateOfBirth',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]