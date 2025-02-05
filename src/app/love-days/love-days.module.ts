import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { LoveDaysRoutingModule } from './love-days-routing.module';
import { RosedayComponent } from './roseday/roseday.component';
import { LoveDaysComponent } from './love-days.component';
import { CardComponent } from '../shared/card/card.component';
import { RosedayPreviewComponent } from './roseday/roseday-preview/roseday-preview.component';


@NgModule({
  declarations: [
    RosedayComponent,
    LoveDaysComponent,
    CardComponent,
    RosedayPreviewComponent
  ],
  imports: [
    CommonModule,
    LoveDaysRoutingModule,
    DatePipe
  ]
})
export class LoveDaysModule { }
