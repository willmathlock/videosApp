import { IListaGenero } from './../models/IGenero.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GenresService {
  language = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private apiKEY = '?api_key=1b7852c0b827d273a90753639a4e7b46';
  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  searchGenre(): Observable<IListaGenero> {
    const url = `${this.apiURL}genre/movie/list${this.apiKEY}&language=${this.language}`;

    return this.http.get<IListaGenero>(url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.showError(erro))
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
