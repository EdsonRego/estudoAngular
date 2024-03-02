import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']

})
export class personasComponent {
    deshabilitar = false;
    mensaje = 'No se há agregado niguna persona';
    titulo = 'Engineer';
    mostrar = false;

    agregarPersona() {
        this.mostrar = true;
        this.mensaje = 'Persona agregada!!';
    }

}