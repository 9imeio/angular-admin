import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menu: {};
  activeTab = 'home';

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.menu = this.getMenu();
  }

  getActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

  getMenu(){
    return this.config.getConfig().menu;
  }
}
