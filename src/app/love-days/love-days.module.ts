import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { LetterComponent } from '../shared/letter/letter.component';


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
    LetterComponent
  ],
  imports: [
    CommonModule,
    LoveDaysRoutingModule,
    DatePipe,
    FormsModule
  ]
})
export class LoveDaysModule { }
