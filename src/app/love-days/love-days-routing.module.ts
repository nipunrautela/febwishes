import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosedayComponent } from './roseday/roseday.component';
import { LoveDaysComponent } from './love-days.component';
import { ProposedayComponent } from './proposeday/proposeday.component';
import { ChocolatedayComponent } from './chocolateday/chocolateday.component';
import { TeddydayComponent } from './teddyday/teddyday.component';
import { PromisedayComponent } from './promiseday/promiseday.component';
import { HugdayComponent } from './hugday/hugday.component';
import { ValentinesdayComponent } from './valentinesday/valentinesday.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoveDaysComponent },
  {
    path: 'roseday', component: RosedayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'proposeday', component: ProposedayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'chocolateday', component: ChocolatedayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'teddyday', component: TeddydayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'promiseday', component: PromisedayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'hugday', component: HugdayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'valentinesday', component: ValentinesdayComponent, children: [
      { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoveDaysRoutingModule { }
