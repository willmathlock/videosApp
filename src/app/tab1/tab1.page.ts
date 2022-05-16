import { GenresService } from './../services/genres.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  titulo = 'Filmes';

  generos = [];

  listaFilmes: IListaFilmes;
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public genreService: GenresService,
    public route: Router
  ) {}

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const search = evento.target.value;
    if (search && search.trim() !== '') {
      this.filmeService.searchMovie(search).subscribe((dados) => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.saveData('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Deseja <strong>favoritar</strong> o filme!?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Sim',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filme favoritado.',
      duration: 1500,
      color: 'medium',
    });
    toast.present();
  }

  ngOnInit() {
    this.genreService.searchGenre().subscribe(dados =>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });
    });
  }
}
