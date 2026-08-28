import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  totalChecks = signal(0);

  incrementer(valeur: number) {
    this.totalChecks.update(total => total + valeur);
  }
}