import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'Super Man',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.white,
    },
    {
      name: 'Spider Man',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Capitan America',
      canFly: false,
      color: Color.green,
    },
  ];

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrderBy(value: keyof Hero): void {
    this.orderBy = value;
  }
}
