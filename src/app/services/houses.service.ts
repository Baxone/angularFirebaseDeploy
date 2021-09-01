import { Injectable } from '@angular/core',
import { House } from '../interfaces/house.interface';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  arrHouses: House[];

  constructor() {
    this.arrHouses = [{
      id: 1,
      titulo: "Bonita casa adosada",
      direccion: "Calle del Almendro 17, 28090",
      ciudad: 'Madrid',
      numerohabitaciones: 3,
      propietario: 'Don Ramiro',
      disponibilidad: true,
      foto: 'https://media.yaencontre.com/img/photo/w380/6385/6385-29962224-919894441.jpg',
      lat: 1.1,
      long: 2.2
    }]
  }
}
