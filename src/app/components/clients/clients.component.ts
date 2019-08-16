import { Component, OnInit } from '@angular/core';
import { Client } from '@app/models/client/client.model';
import { ClientService } from '@app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client [];

  // tslint:disable-next-line: variable-name
  constructor( private _clientService: ClientService) { }

  ngOnInit() {
    this.clients = this._clientService.getClients();
  }

}
