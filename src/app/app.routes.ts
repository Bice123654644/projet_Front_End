import { Routes } from '@angular/router';
import { MesNotesComponent } from './Page/mes-notes/mes-notes';

export const routes: Routes = [
  { path: '', redirectTo: 'MesNotes', pathMatch: 'full' },
  { path: 'MesNotes', component: MesNotesComponent },
];


