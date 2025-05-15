import { Injectable } from '@angular/core';
import { User } from '../models/user/User';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []
  url: string = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }


  validar(email: string, password: string): Observable<User[]> {
    const ruta = `${this.url}?email=${email}&password=${password}`;
    return this.http.get<User[]>(ruta,{params:{"email":email,"password":password}});
  }
  registrar(dni: string, nombre: string, email: string, password: string): void {
    const newUser = new User(dni, nombre, email, password, 'user');
    this.users.push(newUser);
    this.http.post(this.url, newUser).subscribe((response) => {
      console.log('Usuario registrado:', response);
    });
  }
}
