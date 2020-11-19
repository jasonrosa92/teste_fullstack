import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUsuario {
  id?: string;
  nome: string;
  idade: number;
  cidade: string;
}

export interface DjangoFilter {
  count: number;
  next: string;
  previous?: any;
  results: Array<IUsuario>;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<DjangoFilter> {
    return this.http.get<DjangoFilter>(`${this.url}/usuarios/?limit=100`);
  }

  getUsuario(id: any): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/usuarios/${id}`);
  }

  editUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(
      `${this.url}/usuarios/${usuario.id}/`,
      usuario
    );
  }
}
