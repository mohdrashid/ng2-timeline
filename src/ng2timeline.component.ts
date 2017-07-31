/**
 * Created by mohma on 7/31/2017.
 */

import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector:'ng2-timeline',
  templateUrl:'./ng2timeline.component.html',
  styleUrls:['./ng2timeline.component.scss']
})

export class Ng2TimelineComponent implements OnInit{
  @Input('data') items:Array<Object>;
  @Input('completeListener') listener:any;

  public onClick(index):void{
    if(this.listener){
      if(this.listener(this.items[index])){
        this.items[index]['complete']=!this.items[index]['complete'];
      }
    }
  }

  ngOnInit(): void {

  }


}
