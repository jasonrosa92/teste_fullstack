from django.db import models
from atracoes.models import Atracao
from comentarios.models import Comentario
from avaliacoes.models import Avaliacao
from enderecos.models import Endereco

class Usuario(models.Model):
    id = models.DecimalField(primary_key=True, max_digits=2, decimal_places=0)
    nome = models.TextField(max_length=50)
    idade = models.DecimalField(max_digits=3, decimal_places=0)
    cidade = models.TextField(max_length=100)

    def __str__(self):
        return self.nome


class PontoTuristico(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=None)
    nome = models.CharField(max_length=150)
    descricao = models.TextField()
    aprovado = models.BooleanField()
    atracoes = models.ManyToManyField(Atracao)
    comentario = models.ManyToManyField(Comentario)
    avaliacoes = models.ManyToManyField(Avaliacao)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return(self.nome)