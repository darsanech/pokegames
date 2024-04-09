import { Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { WeaponslistComponent } from './weaponslist/weaponslist.component';
import { BreedComponent } from './breed/breed.component';
import { SudokuComponent } from './sudoku/sudoku.component';

export const routes: Routes = [
    {path: 'weapons-list', component: WeaponslistComponent},
    {path: 'breed', component: BreedComponent},
    {path: 'sudoku', component: SudokuComponent},
];
