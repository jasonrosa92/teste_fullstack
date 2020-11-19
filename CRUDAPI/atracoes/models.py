from django.db import models


class Atracao(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.TextField()
    idade_minima = models.IntegerField()
    horario_funcionamento = models.IntegerField()

    def __str__(self):
        return self.nome