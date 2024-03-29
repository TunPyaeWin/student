# Generated by Django 2.2.2 on 2019-06-30 07:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseName', models.CharField(default='', max_length=100)),
                ('major', models.CharField(default='', max_length=100)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('studentName', models.CharField(default='', max_length=100)),
                ('dateOFBirth', models.DateTimeField(auto_now_add=True)),
                ('emailAddress', models.CharField(default='', max_length=100)),
                ('mobileNumber', models.CharField(default='', max_length=100)),
                ('gender', models.BooleanField(default=False)),
                ('address', models.CharField(default='', max_length=100)),
                ('courseId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='studentId', to='Application.Course')),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
