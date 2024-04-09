import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeaponslistComponent } from './weaponslist/weaponslist.component';
import { CheckweaponService } from './services/checkweapon.service';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent {
  [x: string]: any;
  @ViewChildren('row0') row0!: QueryList<ElementRef>;
  @ViewChildren('row1') row1!: QueryList<ElementRef>;
  @ViewChildren('row2') row2!: QueryList<ElementRef>;
  constructor(private dialogRef: MatDialog, private checkweapon: CheckweaponService) { }
  weaponservice: CheckweaponService = this.checkweapon;
  reroll() {
    this.weaponservice.reroll();
  }

  selectweapon(id: number) {
    const dialogRef = this.dialogRef.open(WeaponslistComponent, {
      width: '70%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '250ms',
      height: '70%',
      data: {
        nombre: id,
        condicion1: this.weaponservice.gridPokemons[id].condicion1,
        condicion2: this.weaponservice.gridPokemons[id].condicion2,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        const row = Math.trunc(result[1] / 3)
        const child = result[1] - (3 * row)
        if (result[0] == "true") {
          this["row" + row].get(child)?.nativeElement.classList.toggle('shadow-success')
          this["row" + row].get(child)?.nativeElement.classList.toggle('disabled')
          setTimeout(() => {
            this["row" + row].get(child)?.nativeElement.classList.toggle('shadow-success')
          }, 500);
        }
        else if (result[0] == "false") {
          this["row" + row].get(child)?.nativeElement.classList.toggle('shadow-error')
          this["row" + row].get(child)?.nativeElement.classList.toggle('rumble')
          setTimeout(() => {
            this["row" + row].get(child)?.nativeElement.classList.toggle('shadow-error')
            this["row" + row].get(child)?.nativeElement.classList.toggle('rumble')
          }, 500);
        }
      }

    })
  }

  help() {
    const comm = "En esta cuadricula de 3x3 formada por pokeballs tienes que adivinar que pokemon contiene los tipos pedidos. \nPara seleccionar un pokemon, haz click en la pokeball y usa la barra de búsqueda para encontrarlo. \nEn caso de ser correcto, el pokemon quedará guardado y la pantalla se iluminara en verde. \nEn caso contrario se iluminará de rojo."
    this.dialogRef.open(PopupComponent, {
      width: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '250ms',
      height: '80%',
      data: {
        title: 'COMO JUGAR',
        desc: comm
      }
    })
  }


}
