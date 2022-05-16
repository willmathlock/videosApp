import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private dados: any = [];

  constructor() {}

  saveData(index: string, dados: any): boolean {
    if (index) {
      this.dados[index] = dados;
    } else {
      return false;
    }
    return true;
  }

  getData(index: string): any {
    if (index) {
      return this.dados[index];
    } else {
      return null;
    }
  }

  deleteData(index: string): boolean{
    if(index){
      return delete this.dados[index];
    }

  }
}
