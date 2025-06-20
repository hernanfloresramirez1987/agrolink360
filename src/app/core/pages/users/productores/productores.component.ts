import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productores',
  imports: [CommonModule, FormsModule],
  templateUrl: './productores.component.html',
  styleUrl: './productores.component.css'
})
export default class ProductoresComponent {
  nuevoProductor = {
    nombre: '',
    correo: '',
    contrasena: '',
    telefono: '',
    direccion: '',
    latitud: null,
    longitud: null,
    // Datos tabla 'productores'
    nombre_finca: '',
    descripcion: '',
    area_total: null,
    // Datos de finca secundaria opcional (tabla 'fincas')
    finca_secundaria: {
      nombre: '',
      descripcion: '',
      area_total: null,
      latitud: null,
      longitud: null
    }
  };

  registrarProductor() {
    console.log('Productor a registrar:', this.nuevoProductor);
    // Aquí llamas a tu servicio que inserta en 'usuarios', 'productores', 'fincas'
  }
}
