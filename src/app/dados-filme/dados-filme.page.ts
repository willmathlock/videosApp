import { GenresService } from './../services/genres.service';
import { IFilmeApi } from './../models/IFilmeAPI.model';
import { IFilme } from './../models/iFilme.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {
  filme: IFilmeApi;
  generos = [];
  constructor(public dadosService: DadosService, public genreService: GenresService,) {}

  ngOnInit() {
    this.filme = this.dadosService.getData('filme');
    console.log('PEGUEI OTARIO: ', this.filme.title);
    this.genreService.searchGenre().subscribe((dados) => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach((genero) => {
        this.generos[genero.id] = genero.name;
      });
    });
  }
}
