import { Component } from '@angular/core';
import { Setup } from '../../shared/types';

@Component({
  selector: 'app-roseday',
  templateUrl: './roseday.component.html',
  styleUrl: './roseday.component.css'
})
export class RosedayComponent {
  tabSelected: string = 'components';
  workingFile: string | null = null;

  loadedSetup: Setup | null = null;
}
