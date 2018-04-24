import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template:  `<span>You are successful!</span>`,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
