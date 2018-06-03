import {Component, OnInit} from '@angular/core';
import {HackernewsApiService} from '../services/hackernews-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss'],
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;

  constructor(
    private _hackerNewsApiService: HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const itemID = +params['id'];
      this._hackerNewsApiService
        .fetchComments(itemID)
        .subscribe(data => (this.item = data), error => console.log(error));
    });
  }
}
