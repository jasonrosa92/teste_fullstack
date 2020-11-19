from django_filters import FilterSet,BaseInFilter,RangeFilter
from rest_framework.viewsets import ModelViewSet
from django.db.models import CharField, Value as V
from django.db.models.functions import Concat
from .serializers import UsuarioSerializer
from django.db.models import Q
from core.models import Usuario
import django_filters

class FiltroUsuario(FilterSet):
    class Meta:
        model = Usuario
        fields = {
            'cidade': ['iexact'],
            'nome': ['iexact']
        }



class UsuarioViewSet(ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    filter_class = FiltroUsuario