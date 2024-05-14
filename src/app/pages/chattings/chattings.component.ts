import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chattings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chattings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsComponent {}
