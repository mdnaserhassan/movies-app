import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class AppComponent {
  title = 'movie-app';
  public items: Array<any> = [];
  public expanded = false;
  constructor(private router: Router) {
    const routes: any[] = router.config;
    this.items = this.mapItems(router.config);
    this.items[0].selected = true;

  }
  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: any[], path?: string): any[] {
    return routes.map((item) => {
      return {
        text: item.text,
        icon: item.icon,
        path: item.path ? item.path : "",
      };
    });
  }
}
