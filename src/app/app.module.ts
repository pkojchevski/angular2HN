import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {StoriesComponent} from './stories/stories.component';
import {FooterComponent} from './footer/footer.component';
import {ItemComponent} from './item/item.component';
import {HackernewsApiService} from './services/hackernews-api.service';

import {HttpClientModule} from '@angular/common/http';
import {DomainPipe} from './shared/domain.pipe';
import {MomentModule} from 'angular2-moment';
import {ItemCommentsComponent} from './item-comments/item-comments.component';

import {routing} from './app.routes';
import {CommentTreeComponent} from './comment-tree/comment-tree.component';
import {CommentComponent} from './comment/comment.component';
import {UserComponent} from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent,
  ],
  imports: [BrowserModule, HttpClientModule, MomentModule, routing],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
