import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  public hasLoader: boolean = false;

  @Input()
  public alt: string = "";
  constructor() { }

  onLoad() {
    setTimeout(() => {
      this.hasLoader = true;
    }, 500);
  }

  ngOnInit() {
    if (this.url === undefined) throw new Error('Url is required');
  }

}
