import {  Component,
          OnInit,
          Input,
          OnChanges,
          SimpleChanges,
          ContentChild,
          ElementRef
        } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: { type: string, name: string, content: string  };
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('onInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( 'onChanges called!' );
  }

}
