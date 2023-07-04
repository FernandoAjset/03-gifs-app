import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../models/giphy-response.model';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
@Input()
public gifsList :Gif[]=[];

  constructor() { }
}
