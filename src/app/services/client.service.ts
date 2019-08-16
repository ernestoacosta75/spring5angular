import { Injectable } from '@angular/core';
import { CLIENTS } from '@app/models/clients.json';
import { Client } from '@app/models/client/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Client [] {
    return CLIENTS;
  }
}
