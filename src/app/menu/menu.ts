import { Component, signal, output } from '@angular/core';
import { Akaall } from '../akaall/akaall';
import { Archipelago } from '../archipelago/archipelago';

@Component({
  selector: 'app-menu',
  imports: [Akaall, Archipelago],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  readonly onglets = {
  akaall: 'Akaall',
  archipelago: 'Archipelago',
} as const;
  ongletActif = signal<keyof typeof this.onglets>('akaall');
  checkTermine = output<void>();

  afficherOnglet(onglet: 'akaall' | 'archipelago') {
    this.ongletActif.set(onglet);
  }
}
