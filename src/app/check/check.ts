import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-check',
  imports: [],
  templateUrl: './check.html',
  styleUrl: './check.css',
})
export class Check {
  totalChecks = signal(0);

  incrementer(value : number){
    this.totalChecks.update(total => total + value);
  }
}
