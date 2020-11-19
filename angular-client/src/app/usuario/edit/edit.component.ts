import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService, IUsuario } from '../../services/usuario.service';

export class Usuario {
  nome = '';
  cidade = '';
  idade = 0;
}

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  formUsuario: FormGroup;
  private usuario: IUsuario;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.formUsuario = this.createForm(new Usuario());
  }

  ngOnInit(): void {
    this.usuarioService
      .getUsuario(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (usuario: IUsuario) => (this.formUsuario = this.createForm(usuario)),
        (error) => {
          console.error(error);
          this.router.navigateByUrl('/usuario');
        }
      );
  }

  private createForm(usuario: IUsuario): FormGroup {
    return this.formBuilder.group({
      id: [usuario.id],
      nome: [usuario.nome],
      cidade: [usuario.cidade],
      idade: [usuario.idade],
    });
  }

  submit(): void {
    if (!this.formUsuario.valid) {
      console.log(this.formUsuario.errors);
      return;
    }
    const usuario = this.formUsuario.value;
    this.usuarioService.editUsuario(usuario).subscribe(
      () => this.router.navigateByUrl('/usuario'),
      (error) => console.error(error)
    );
  }
}
