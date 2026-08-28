import { Component, inject, signal } from '@angular/core';
import { CheckService } from '../check/check.service';

@Component({
  selector: 'app-akaall',
  imports: [],
  templateUrl: './akaall.html',
  styleUrl: './akaall.css',
})
export class Akaall {
  readonly checkService = inject(CheckService);
  readonly duree = this.checkService.dureeAkaall;

  terminerCycle() {
    this.checkService.incrementer(1);
  }

  accelerer() {
    this.checkService.accelererAkaall()
  }
}
