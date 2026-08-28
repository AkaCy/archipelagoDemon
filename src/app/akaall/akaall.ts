import { Component, inject } from '@angular/core';
import { CheckService } from '../check/check.service';

@Component({
  selector: 'app-akaall',
  imports: [],
  templateUrl: './akaall.html',
  styleUrl: './akaall.css',
})
export class Akaall {
  readonly checkService = inject(CheckService);

  terminerCycle() {
    this.checkService.incrementer(1);
  }
}
