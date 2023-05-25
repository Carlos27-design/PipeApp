import { Component } from '@angular/core';
import { interval, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css'],
})
export class UnCommonPageComponent {
  //i18n Select

  public name: string = 'Carlos';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient(): void {
    this.name = 'Carla';
    this.gender = 'female';
  }

  //i18n Plural

  public clients: string[] = [
    'Pablo',
    'Mauricio',
    'Maria',
    'Juan',
    'Juana',
    'Camilo',
    'Jaime',
    'Luis',
    'Jonathan',
    'Camil',
  ];

  public clientMap = {
    '=0': 'No tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperado.',
    '=2': 'tenemos 2 clientes esperado.',
    other: 'tenemos # clientes esperado.',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue and JSON Pipe

  public person = {
    name: 'Carlos',
    age: 25,
    address: 'Lord Cochranne 970',
  };

  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos en la promesa');
    }, 3500);
  });
}
