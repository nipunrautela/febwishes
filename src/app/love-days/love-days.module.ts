import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { LoveDaysRoutingModule } from './love-days-routing.module';
import { RosedayComponent } from './roseday/roseday.component';
import { LoveDaysComponent } from './love-days.component';
import { CardComponent } from '../shared/card/card.component';
import { RosedayPreviewComponent } from './roseday/roseday-preview/roseday-preview.component';
import { ProposedayComponent } from './proposeday/proposeday.component';
import { ChocolatedayComponent } from './chocolateday/chocolateday.component';
import { TeddydayComponent } from './teddyday/teddyday.component';
import { PromisedayComponent } from './promiseday/promiseday.component';
import { HugdayComponent } from './hugday/hugday.component';
import { ValentinesdayComponent } from './valentinesday/valentinesday.component';
import { RosedayBuildComponent } from './roseday/roseday-build/roseday-build.component';


@NgModule({
  declarations: [
    RosedayComponent,
    LoveDaysComponent,
    CardComponent,
    RosedayPreviewComponent,
    ProposedayComponent,
    ChocolatedayComponent,
    TeddydayComponent,
    PromisedayComponent,
    HugdayComponent,
    ValentinesdayComponent,
    RosedayBuildComponent
  ],
  imports: [
    CommonModule,
    LoveDaysRoutingModule,
    DatePipe
  ]
})
export class LoveDaysModule { }
