import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosedayComponent } from './roseday/roseday.component';
import { LoveDaysComponent } from './love-days.component';
import { RosedayPreviewComponent } from './roseday/roseday-preview/roseday-preview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoveDaysComponent },
  {
    path: 'roseday', component: RosedayComponent, children: [
      { path: 'preview', component: RosedayPreviewComponent },
      { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoveDaysRoutingModule { }
