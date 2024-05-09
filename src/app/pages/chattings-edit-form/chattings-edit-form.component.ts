import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chattings-edit-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chattings-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsEditFormComponent {}
