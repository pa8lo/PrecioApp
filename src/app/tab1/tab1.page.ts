import { Component } from '@angular/core';
import { PreciosService } from '../services/precios.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public precioService : PreciosService) {}

}
