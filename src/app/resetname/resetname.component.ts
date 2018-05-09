import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetname',
  templateUrl: './resetname.component.html',
  styleUrls: ['./resetname.component.css']
})
export class ResetnameComponent implements OnInit {

  resetButtenEnabled = false;
  name = '';
  constructor() { }


  ngOnInit() {


  }

  resetName() {
    this.name = '';
  }


}
