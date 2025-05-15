import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailRegistro: string = '';
  passwordRegistro: string = '';
  nombreRegistro: string = '';
  dniRegistro: string = '';
  emailLogin: string = '';
  passwordLogin: string = '';
  showLogin: boolean = true; // Controla si se muestra el formulario de inicio de sesión

  toggleForm(): void {
    this.showLogin = !this.showLogin; // Alterna entre los formularios
  }
  constructor(private UserService :UserService){}
  login(email: string, password: string): void {
    let usuario = this.UserService.validar(email, password);
    usuario.subscribe((data) => {
      if (data.length > 0) {
        console.log('Usuario encontrado');
        console.log(data);
      } else {
        console.log('Usuario no encontrado');
      }
    });
  }
  registrar(dni: string, nombre: string,  email: string, password: string): void {
    this.UserService.registrar(dni, nombre, email, password);


  }
}
