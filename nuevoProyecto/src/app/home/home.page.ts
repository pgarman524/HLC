import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1: number = this.numAleatorio(1, 10);
  num2: number = this.numAleatorio(1, 10);
  resultado: number = this.num1 + this.num2;
  respuestaUsuario: number | null = null;
  mensaje: string = '';

  constructor() {
    console.log("Pregunta: ¿Cuánto es" + this.num1 + " " + this.num2 + "?");
  }

  numAleatorio(a: number, b: number) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  comprobarRespuesta() {
    if (this.respuestaUsuario === this.resultado) {
      this.mensaje = "¡Correcto!";
    } else {
      this.mensaje = "Incorrecto, la respuesta correcta es " + this.resultado;
    }

    this.num1 = this.numAleatorio(1, 10);
    this.num2 = this.numAleatorio(1, 10);
    this.resultado = this.num1 + this.num2;
    this.respuestaUsuario = null;
  }
}