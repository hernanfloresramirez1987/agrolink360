import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-compradores',
  imports: [CommonModule, FormsModule],
  templateUrl: './compradores.component.html',
  styleUrl: './compradores.component.css'
})
export default class CompradoresComponent {
  usuario: any = {
    nombre: '',
    correo: '',
    contrasena: '',
    tipo_usuario: ''
  };

  registrar() {
    console.log('Datos enviados:', this.usuario);

    switch(this.usuario.tipo_usuario) {
      case 'admin':
        // Registro para administrador
        break;
      case 'productor':
        // Registro para Productor con this.usuario.nombre_finca
        break;
      case 'comprador':
        // Registro para Comprador con this.usuario.nombre_empresa
        break;
      case 'transportista':
        // Registro para Transportista con this.usuario.tipo_vehiculo
        break;
      case 'logistica':
        // Registro para Servicio Logístico con this.usuario.nombre_logistica
        break;
    }
  }
}
