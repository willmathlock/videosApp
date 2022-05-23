import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string;
  password: string;
  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'admin@admin.com' && this.password === 'admin'){
      this.route.navigateByUrl('/tabs/tab1');
    }else{
      this.presentToast('Senha errada burrão', 'danger');
    }
  }

  async presentToast(texto: string, cor: string){
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }
}
