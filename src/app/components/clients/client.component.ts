import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  personalRecord: Client;

  constructor() { }

  ngOnInit() {
  }

}
