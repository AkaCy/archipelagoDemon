import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Check } from './check/check';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Check, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('archipelagoDemon');
}
