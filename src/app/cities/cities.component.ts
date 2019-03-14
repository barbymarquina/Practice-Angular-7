import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../ciudad';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
@Input() public cities:Array<Ciudad>=[{
  name:"Madrid",
  temperatura:{
    valor: 20,
    tipo:"C"
  }
}]
  constructor() { }

  ngOnInit() {
  }

}
