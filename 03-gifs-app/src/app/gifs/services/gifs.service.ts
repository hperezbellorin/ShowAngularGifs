import { SearchResponse, Gif } from './../interfaces/gits.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'



@Injectable({providedIn: 'root'})
export class GifsService {


public gifList:Gif[] = [];


  private apiKey:     string = 'ocuqMifbJK8TCi3KtEN6VTvYYWE2ryRi';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

 constructor(private http: HttpClient ) { }


private _tagsHistory: string[] =[];


private organizeHistory(tag: string): void {
tag = tag.toLowerCase();

if (this._tagsHistory.includes(tag)) {

   this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
}
this._tagsHistory.unshift(tag);
this._tagsHistory = this._tagsHistory.splice(0,10);

}

  get TagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
if (tag.length === 0) return;
    this.organizeHistory(tag);


const params = new HttpParams()
.set('api_key', this.apiKey)
.set('limit','10' )
.set('q', tag)

this.http.get<SearchResponse> (`${ this.serviceUrl }/search`,{ params})
.subscribe( resp =>{

  this.gifList = resp.data;
console.log({gifs:this.gifList});

})
    //fetch('api.giphy.com/v1/gifs/search?api_key=ocuqMifbJK8TCi3KtEN6VTvYYWE2ryRi&q=valorant&limit=10')



  }


}
