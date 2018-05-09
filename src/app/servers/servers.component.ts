import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // tslint:disable-next-line:component-selector
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = 'Joes test server';
  serverCreatedStatus = 'No server was created!';
  serverCreated = false;
  servers =  ['Testserver', 'Betaserver'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
     this.serverCreatedStatus = 'server was created! ' + this.serverName;
     this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
