import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../ciudad';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() myCity:Array<Ciudad>;

  constructor() { }

  ngOnInit() {
  }

}
