import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: [],
})
export class MenuComponent {
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'pipe',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'numbers',
          },
          {
            separator: true,
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Custom Pipe',
            icon: 'pi pi-fw pi-cog',
            routerLink: 'custom',
          },
        ],
      },
    ];
  }
}
