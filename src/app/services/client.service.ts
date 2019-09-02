import { Injectable } from '@angular/core';
import { CLIENTS } from '@app/models/clients.json';
import { Client } from '@app/models/client/client.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor( private httpClient: HttpClient) {

  }

  getClients(): Observable<Client []> {
    // Creating an Observable stream from the CLIENTS object
    // return of(CLIENTS);

    return this.httpClient.get<Client []>(this.baseUrl)
      .pipe(
        map(response => response as Client [])
      );

  }
}
