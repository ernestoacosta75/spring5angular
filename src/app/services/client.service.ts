import { Injectable } from '@angular/core';
import { CLIENTS } from '@app/models/clients.json';
import { Client } from '@app/models/client/client.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client []> {
    return of(CLIENTS); // Creating an Observable stream from the CLIENTS object
  }
}
