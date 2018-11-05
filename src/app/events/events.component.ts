import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: {}

  constructor( private config: ConfigService ) { }

  ngOnInit() {
    this.events = this.getEvents();
  }

  getEvents(){
    return this.config.getConfig().events;
  }

}
