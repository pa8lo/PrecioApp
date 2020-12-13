import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { PreciosService } from 'src/app/services/precios.service';

const { Storage } = Plugins;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  costo:number;
  cantidad:number;
  porciento40:number = 0;
  porciento50:number = 0;
  cantidadAGuardar:number = 1
  constructor( public precioService:PreciosService) { }

  ngOnInit() {

  }

  somethingChanged(){
    if(this.costo && this.cantidad && this.costo>0 && this.cantidad > 0){
      this.porciento40 = Math.round((this.costo / this.cantidad) *  1.4)
      this.porciento50 = Math.round((this.costo / this.cantidad) *  1.5) 
    }
  }


  addCount(){
    this.cantidadAGuardar ++
  }

  removeCount(){
    if( this.cantidadAGuardar > 1){
      this.cantidadAGuardar --
    }
  }

  addProduct(){
    let prod = this.cantidadAGuardar * this.costo
    this.precioService.setTotal(prod);
  }
}
