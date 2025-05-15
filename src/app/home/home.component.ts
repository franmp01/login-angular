import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fechaSeleccionada: Date | null = null;
  onFechaChange(event: MatDatepickerInputEvent<Date>) {
    this.fechaSeleccionada = event.value;
    console.log('Fecha seleccionada:', this.fechaSeleccionada?.toLocaleDateString());
    console.log('Día:', this.fechaSeleccionada?.getDate());

    console.log('Mes:', Number(this.fechaSeleccionada?.getMonth())+ 1);     // Los meses son 0-indexados
    console.log('Fecha seleccionada:', this.fechaSeleccionada);
    console.log('Año:', this.fechaSeleccionada?.getFullYear());
  }
}
