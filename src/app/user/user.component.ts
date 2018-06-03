import {Component, OnInit} from '@angular/core';
import {HackernewsApiService} from '../services/hackernews-api.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  sub: any;
  user;

  constructor(
    private _hackerNewsApiService: HackernewsApiService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const userID = params['id'];
      this._hackerNewsApiService.fetchUser(userID).subscribe(
        data => {
          this.user = data;
        },
        error => console.log('Could not load user')
      );
    });
  }

  goBack() {
    this._location.back();
  }
}
