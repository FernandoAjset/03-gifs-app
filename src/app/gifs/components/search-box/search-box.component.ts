import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) { }

  searchTag() {
    this._gifsService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }
}
