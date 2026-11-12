import {Injectable, Service} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NotificacionesService {

  private lista: String[] = []

  añadir(mensaje: String): void {
    this.lista.push(mensaje)
  }

  getLista(): String[] {
    return this.lista
  }

}

