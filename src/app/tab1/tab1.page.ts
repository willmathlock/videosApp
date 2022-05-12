import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

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
          }
        }, {
          text: 'Sim',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Filme favoritado.',
      duration: 1500,
      color: 'medium'
    });
    toast.present();
  }

}
