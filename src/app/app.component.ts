import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbars/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar />
    <div id="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: sans-serif;
    }

    html {
      width: 100vw;
      height: 100vh;
    }

    #container {
      padding: 0.5rem;
      margin: 0 auto;
    }


  `]
})
export class AppComponent {
  title = 'todo-angular';
}
