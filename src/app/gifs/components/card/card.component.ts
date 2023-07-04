import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../models/giphy-response.model';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;
  constructor() { }

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif is required');
  }
}
