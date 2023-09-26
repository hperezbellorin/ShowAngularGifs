import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService ){}

  get tags(): string[]  {
       return this.gifsService.TagsHistory;

  }

  searchTag(tag:string)
  {
     this.gifsService.searchTag(tag);
  }

}
