import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  totalChecks = signal(0); //valeur de base des checks
  dureeAkaall = signal(4); //valeur de base de la barre d'akaall

  incrementer(valeur: number) {
    this.totalChecks.update(total => total + valeur);
  }

  accelererAkaall() {
    if (this.dureeAkaall() > 1) {
      this.dureeAkaall.set(this.dureeAkaall() - 1);
    }

  }
}