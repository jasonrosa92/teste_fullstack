// angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

// Custom Components
import { UsuarioComponent } from './usuario.component';
import { NovoComponent } from './novo/novo.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'novo', component: NovoComponent },
];

@NgModule({
  declarations: [UsuarioComponent, NovoComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class UsuarioModule {}
