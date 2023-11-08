import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
<nav>
    <h2>Angular Todos</h2>

    <div>
        <a routerLink="/">Todos</a>
        <a routerLink="/about">About</a>
    </div>
</nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
