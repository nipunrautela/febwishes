import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, KeyValuePipe } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

import { LoveDaysRoutingModule } from './love-days-routing.module';
import { RosedayComponent } from './roseday/roseday.component';
import { LoveDaysComponent } from './love-days.component';
import { CardComponent } from '../shared/card/card.component';
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
    ProposedayComponent,
    ChocolatedayComponent,
    TeddydayComponent,
    PromisedayComponent,
    HugdayComponent,
    ValentinesdayComponent,
    LetterComponent,
  ],
  imports: [
    CommonModule,
    LoveDaysRoutingModule,
    DatePipe,
    FormsModule,
    KeyValuePipe,
    CdkDrag
  ]
})
export class LoveDaysModule { }
