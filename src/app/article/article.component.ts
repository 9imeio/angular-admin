import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 
  features = {};

  constructor( private route: ActivatedRoute, 
               private config:ConfigService,
               private location: Location ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.features = this.getFeaturesByID(id);
  }

  getFeaturesByID(id:number){
    return this.config.getFeaturesByID(id);
  }

  getBack(){
    this.location.back();
  }
}
