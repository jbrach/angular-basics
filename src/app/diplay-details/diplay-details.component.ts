import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplay-details',
  templateUrl: './diplay-details.component.html',
  styleUrls: ['./diplay-details.component.css']
})
export class DiplayDetailsComponent implements OnInit {

  showSecret = false;
  toggleLogs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleText() {
    this.showSecret = !this.showSecret;
    this.toggleLogs.push('clicked on: ' + Date.now.toString() + ' toggle to: ' + this.showSecret);
  }

}
