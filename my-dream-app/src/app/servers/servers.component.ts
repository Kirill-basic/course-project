import {Component, Input, OnInit} from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created yet';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'MyServer']
  displayHint = false;
  clickCounter: Date[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Server is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUserAdded() {
    this.userName = '';
  }

  changeHintVisibility() {
    // this.clickCounter.push(this.clickCounter.length +1);
    this.clickCounter.push(new Date());
    console.log('Counter length is ' + this.clickCounter.length);
    if (this.displayHint === false) {
      this.displayHint = true;
      console.log('chagned to true');
    } else {
      this.displayHint = false;
      console.log('changed to false');
    }
  }

  getLogColor() {
    console.log("Getting color");
    return this.clickCounter.length > 5 ? 'blue' : 'white';
  }
}
