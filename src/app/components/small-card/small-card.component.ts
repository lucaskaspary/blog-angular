import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id:string | null="0";

  photoCover:string = "";
  cardTitle:string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.id) {
      this.loadCard(this.id)
    }
  }

  loadCard(id:string){
    const result = dataFake.filter(article => article.id == id)[0];

    this.photoCover = result.photo;
    this.cardTitle = result.title;
  }

}
