import { IFilme } from '../models/iFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Vídeos App';

  listaVideos: IFilme[] = [
    {
      nome: 'Sonic the hedgehog 2',
      lancamento: '04/07/2022',
      duracao: '2h 2m',
      classificacao: 76,
      generos: ['Action', 'Science', 'Fiction', 'Comedy', 'Family', 'Adventure'],
      thumbnail: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
      pagina: '/sonic-the-hedgehog-two'
    },
    {
      nome: 'Spider-Man: No Way Home',
      lancamento: '12/16/2021',
      duracao: '2h 28m',
      classificacao: 81,
      generos: ['Action', 'Adventure', 'Science Fiction'],
      thumbnail: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      pagina: '/spiderman-no-way-home'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

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
}
