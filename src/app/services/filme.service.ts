import { HttpClient } from '@angular/common/http';
import { IListaFilmes } from './../models/IFilmeAPI.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  language = 'pt-BR';
  region = 'BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private apiKEY = '?api_key=1b7852c0b827d273a90753639a4e7b46';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  searchMovie(search: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}search/movie${this.apiKEY}&language=${this.language}&region=${this.region}&query=${search}`;

    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError( erro => this.showError(erro))
    );
  }

  async showError(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
