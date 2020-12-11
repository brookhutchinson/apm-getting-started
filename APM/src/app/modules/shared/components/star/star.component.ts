// components
import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnChanges }  from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  constructor() {}

  ngOnChanges() {
    // set star width value in px using rating
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    // write to console
    console.log(`This rating ${this.rating} was clicked`);

    // raise event from StarComponent to ProductListComponent and pass message inside payload
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
