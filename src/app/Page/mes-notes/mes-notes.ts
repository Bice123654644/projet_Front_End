import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mes-notes.html',
  styleUrls: ['./mes-notes.css'],
})
export class MesNotesComponent {
  // Étape 3 : la liste de départ
  notes: string[] = ['Composant', 'Route', 'Service'];

  // Étape 5 : valeur du champ de saisie
  nouvelleNote = '';

  ajouterNote(): void {
    const texte = this.nouvelleNote.trim();
    if (texte) {
      this.notes.push(texte);
      this.nouvelleNote = '';
    }
  }
}
export class MesNotes {}
