import { Component } from '@angular/core';

@Component({

    selector: 'app-body',
    templateUrl: './body.component.html'

})

export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Jordana odia cualquier lugar que pueda considerarse romántico, así que la llevé a uno de mis polígonos industriales favoritos para poder disfrutar de algo de tiempo a solas.',
        autor: 'Oliver Tate'
    };


    peliculas: string [] = ["The Departed", "Donnie Darko", "Pulp Fiction"]
}