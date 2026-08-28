import { Component, inject } from '@angular/core';
import { CheckService } from './check.service';

@Component({
  selector: 'app-check',
  imports: [],
  templateUrl: './check.html',
  styleUrl: './check.css',
})
export class Check {
  readonly checkService = inject(CheckService);
}