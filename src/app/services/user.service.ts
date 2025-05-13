import { Injectable } from '@angular/core';
import { User } from '../models/user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []

  validar(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    return user !== undefined;
  }
  registrar(nombre: string, email: string, password: string): void {
    const id = this.users.length + 1;
    const newUser = new User(id, nombre, email, password, 'user');
    this.users.push(newUser);

    console.log('Usuario registrado');
    console.log(this.users);
  }
}
