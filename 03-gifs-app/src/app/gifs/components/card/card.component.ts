import { Gif } from './../../interfaces/gits.interfaces';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'

})

export class CardComponent implements OnInit {


  @Input()
public gif!: Gif;

ngOnInit(): void {

if(!this.gif) throw new Error('Gif property is required');

}

}
