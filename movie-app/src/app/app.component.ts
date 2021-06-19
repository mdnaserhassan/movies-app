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

    routes.forEach((route) => {
      this.items.push({
        text: route.text,
        path: route.path ? route.path : "",
      });
    });

    this.items[0].selected = true;
  }
}
