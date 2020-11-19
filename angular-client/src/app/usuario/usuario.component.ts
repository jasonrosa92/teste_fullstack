import { pluck } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  UsuarioService,
  IUsuario,
  DjangoFilter,
} from '../services/usuario.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  pageEvent: PageEvent;
  @ViewChild(MatSort) sort: MatSort;

  pageLegth = 0;
  dataSource: MatTableDataSource<IUsuario>;
  dados = [];

  displayedColumns: string[] = ['id', 'nome', 'cidade', 'idade', '#'];

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.usuarioService.getUsuarios().subscribe((data: DjangoFilter) => {
      this.dataSource = new MatTableDataSource(data.results);
      this.pageLegth = data.count;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(row): void {
    this.router.navigate(['usuario/edit', row.id]);
  }

  ngOnDestroy(): void {}
}
