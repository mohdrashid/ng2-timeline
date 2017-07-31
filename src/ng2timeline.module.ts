/**
 * Created by mohma on 7/31/2017.
 */
 import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Ng2TimelineComponent} from "./ng2timeline.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ Ng2TimelineComponent],
  providers: [  ],
  exports: [Ng2TimelineComponent]
})

export class Ng2Timeline { }
