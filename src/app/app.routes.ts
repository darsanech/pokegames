import { Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { WeaponslistComponent } from './weaponslist/weaponslist.component';

export const routes: Routes = [
    {path: 'grid', component: GridComponent},
    {path: 'weapons-list', component: WeaponslistComponent}
];
