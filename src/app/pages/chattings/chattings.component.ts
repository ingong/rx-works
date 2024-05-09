import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chattings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chattings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsComponent {}
