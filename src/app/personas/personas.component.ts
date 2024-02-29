import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']

})
export class personasComponent {
    deshabilitar = false;
    mensaje = 'No se há agregado niguna persona';

    agregarPersona() {
        this.mensaje = 'Persona agregada!!';
    }

}