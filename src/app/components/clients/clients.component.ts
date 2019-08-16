import { Component, OnInit } from '@angular/core';
import { CLIENTS } from "@app/models/clients.json";
import { Client } from '@app/models/client/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client [];

  constructor() { }

  ngOnInit() {
    this.clients = CLIENTS;
  }

}
