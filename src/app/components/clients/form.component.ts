import { Component, OnInit } from '@angular/core';
import { Client } from '@app/models/client/client.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private title = 'Create Client';

  public client: Client = new Client();

  constructor() { }

  ngOnInit() {
  }

  public createClient(): void {
    console.log('Clicked!');
    console.log(JSON.stringify(this.client));
  }

  public getTitle(): string {
    return this.title;
  }
}
