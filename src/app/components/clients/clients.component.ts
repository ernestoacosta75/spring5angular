import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client [] = [
    {id: 1, name: 'Ernesto Antonio',
      lastname: 'Rodriguez Acosta', email: 'ernestoacostacuba@yahoo.com.mx',
      createdAt: new Date()},
    {id: 2, name: 'Paola',
      lastname: 'Damiani', email: 'lottipau@yahoo.it',
      createdAt: new Date()},
    {id: 3, name: 'Caridad',
      lastname: 'Acosta Sarracen', email: 'caridad@yahoo.cu',
      createdAt: new Date()},
      {id: 4, name: 'Luis',
      lastname: 'Rodriguez Muguercia', email: 'cutito@gmail.com',
      createdAt: new Date()},
      {id: 5, name: 'Iliana',
      lastname: 'Rodriguez Acosta', email: 'iliana@yahoo.com',
      createdAt: new Date()},
      {id: 6, name: 'Frank Ernesto',
      lastname: 'Palacios Rodriguez', email: 'frankernesto@yahoo.com',
      createdAt: new Date()},
      {id: 7, name: 'Claudia',
      lastname: 'Palacios Rodriguez', email: 'claudia@gmail.com',
      createdAt: new Date()},
      {id: 8, name: 'Oldrin',
      lastname: 'Palacios', email: 'oldrin@hotmail.com',
      createdAt: new Date()},
      {id: 9, name: 'Modesta',
      lastname: 'Dellavalle', email: 'modesta@yahoo.it',
      createdAt: new Date()},
      {id: 10, name: 'Eleonora',
      lastname: 'Damiani', email: 'eleonora@yahoo.it',
      createdAt: new Date()},
      {id: 11, name: 'Alexander',
      lastname: 'Cuba', email: 'alexander@yahoo.cu',
      createdAt: new Date()},

  ];

  constructor() { }

  ngOnInit() {
  }

}
