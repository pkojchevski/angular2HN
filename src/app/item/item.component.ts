import {Component, OnInit, Input} from '@angular/core';
import {HackernewsApiService} from '../services/hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {
    console.log(this.item);
    // this.item = this._hackerNewsApiService
    //   .fetchItem(this.itemID)
    //   .subscribe(item => {
    //     this.item = item;
    //     console.log(item);
    //   });
  }
}
